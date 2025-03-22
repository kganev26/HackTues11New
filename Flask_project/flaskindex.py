import argparse
import json
import requests
from flask import Flask, request, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS



app = Flask(__name__)

BASE_API_URL = "https://api.langflow.astra.datastax.com"
LANGFLOW_ID = "9cec4078-dc10-4dae-8dc7-110fc976a178"
FLOW_ID = "4a643dd5-ff1b-4508-8061-16a4e89161ef"
APPLICATION_TOKEN = "AstraCS:AykKklsRmUbelRhYQdRpHgTN:b092db8211be0c2d8c25a34e7cca07d19ca87d7cb2b81a4b53ba843e36aee74a"

def run_flow(message: str) -> dict:
    """ Sends message to Langflow API and returns the response. """
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{FLOW_ID}"
    headers = {"Authorization": f"Bearer {APPLICATION_TOKEN}", "Content-Type": "application/json"}
    payload = {"input_value": message, "output_type": "chat", "input_type": "chat"}

    response = requests.post(api_url, json=payload, headers=headers)
    return response.json()

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:dummypass@localhost/testdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    
    income = db.Column(db.Integer, nullable=False)
    expences = db.Column(db.Integer, nullable=False)
    

with app.app_context():
    db.create_all()


@app.route('/reg', methods=['POST'])
def reg():
    data = request.json
    name = data['id']
    income = int(data['income'])
    expenses = int(data['expenses'])

    newuser = User(name=name, income=income, expences=expenses)
    db.session.add(newuser)
    db.session.commit()

    return f'Added user {name}'


@app.route('/chatget', methods=['POST'])
def chatget():
    data = request.json
    
    msg = data.get("message")  # ✅ Get specific key safely
    if not msg:
        return jsonify({"error": "Missing 'message' field"}), 400

    rpl = run_flow(msg)
    message_text = rpl['outputs'][0]['outputs'][0]['results']['message']['data']['text']
    
    return jsonify({"reply": message_text})

@app.route('/test', methods=['POST'])
def test():
    return 'test'


@app.route('/homepage')
def homepage():
    return render_template('index.html')

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json()
    cardnum = data.get('uid')
    pin = data.get('pin')
    new_user = User(cardnum=cardnum, pin=pin)
    try:
        db.session.add(new_user)
        db.session.commit()
        return f'User with creditentials: cardnumber: {cardnum}, pin: {pin}; was sussesfully added to the database'
    except:
        return 'Sorry, there was an error in adding user to the database'

@app.route('/balance/<id>')
def balance(id):
    user = User.query.filter_by(id=id).first()
    balance = user.get('balance')
    return balance

@app.route('/cardnum', methods=['GET', 'POST'])
def card():
    data = request.get_json()
    num = data.get('uid')
    
    return f'Recived data (card number): {num}'

@app.route('/ai_retr/<user_id>')
def retriver(user_id):
    user = User.query.filter_by(id=user_id).first()
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5500, debug=True)

