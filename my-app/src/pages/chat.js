import React, { useState } from "react";
import { create } from "zustand";

const useChatStore = create((set) => ({
  messages: [],
  addMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),
}));

export default function App() {
  const { messages, addMessage } = useChatStore();
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      addMessage({ text: input, sender: "You" });
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="p-4 bg-blue-500 text-white text-lg font-semibold">
        Simple Chat
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md ${
              msg.sender === "You" ? "bg-blue-300 self-end" : "bg-gray-300"
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 bg-white flex">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-md p-2 mr-2"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}