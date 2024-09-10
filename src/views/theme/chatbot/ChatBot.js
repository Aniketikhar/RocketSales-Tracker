import { useState } from 'react'

export default function Component() {
  const [activeChats, setActiveChats] = useState([
    {
      id: '1',
      name: 'John Doe',
      role: 'Salesman',
      lastMessage: 'Thank you for your help',
      date: '08/15/2024',
    },
    {
      id: '2',
      name: 'Jane Smith',
      role: 'Manager',
      lastMessage: 'How can I assist you?',
      date: '08/14/2024',
    },
  ])

  const [selectedChat, setSelectedChat] = useState(null)
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'John Doe',
      content: 'Hello, I need some assistance with a client.',
      timestamp: '10:30 AM',
    },
    { id: '2', sender: 'You', content: 'Sure, what can I help you with?', timestamp: '10:32 AM' },
  ])

  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return
    const newMsg = {
      id: Date.now().toString(),
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages([...messages, newMsg])
    setNewMessage('')
  }

  return (
    <div
      className="flex h-[600px] border border-gray-300"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <div className="w-1/4 border-r border-gray-300 bg-gray-100">
        <div className="p-3 border-b border-gray-300 bg-gray-200">
          <h2 className="text-lg font-bold">Active Chats ({activeChats.length})</h2>
        </div>
        <div className="overflow-y-auto h-[calc(600px-43px)]">
          {activeChats.map((chat) => (
            <div
              key={chat.id}
              className={`p-3 cursor-pointer border-b border-gray-300 ${selectedChat === chat.id ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="font-bold">{chat.name}</div>
              <div className="text-sm text-gray-600">{chat.role}</div>
              <div className="text-sm truncate mt-1">{chat.lastMessage}</div>
              <div className="text-xs text-gray-500 mt-1">{chat.date}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white">
        <div className="p-3 border-b border-gray-300 bg-gray-200">
          <h2 className="text-lg font-bold">Chat Messages</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}
            >
              <div
                className={`inline-block max-w-[70%] p-2 rounded ${message.sender === 'You' ? 'bg-blue-100' : 'bg-gray-100'}`}
              >
                <div className="font-bold">{message.sender}</div>
                <p>{message.content}</p>
                <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-gray-300">
          <div className="flex">
            <input
              type="text"
              className="flex-1 border border-gray-300 p-2"
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              className="ml-2 px-4 py-2 bg-blue-500 text-white font-bold"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
