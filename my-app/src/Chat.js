import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styles
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]); // List of messages
  const [messageInput, setMessageInput] = useState(''); // Input field value

  // Function to handle sending the message
  const handleSendMessage = async () => {
    if (!messageInput) return; // Don't send empty messages

    // Add the sent message to the messages list
    
    const newMessages = [...messages, { text: messageInput, type: 'sent' }];
    setMessages(newMessages);
    setMessageInput(''); // Clear the input field

    try {
      console.log(messageInput);
      // Simulate an API request
      const response = await axios.post('http://192.168.1.59:5500/chatget', {
        message: messageInput
      } );

      const data = response.data;
      console.log(data);

      // Add the reply message from the server
      setMessages([...newMessages, { text: data.reply, type: 'received' }]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error, e.g., by showing an error message
    }
  };

  return (
    <div className="chat-container">
      <p>Your AI Consultant</p>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type a message... (Please include income and expenses)"
          className="input-field"
        />
        <button onClick={handleSendMessage} class="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
