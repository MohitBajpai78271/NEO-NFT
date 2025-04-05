import React, { useState } from 'react';
import axios from 'axios';
import styles from './AIMentor.module.css';

const AIMentor = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I’m your NFT AI Mentor 🤖. How can I help?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return;
    console.log(process.env.REACT_APP_OPENAI_API_KEY)
    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are an NFT mentor who helps users understand NFTs.' },
            ...newMessages.map((msg) => ({
              role: msg.from === 'user' ? 'user' : 'assistant',
              content: msg.text,
            })),
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botReply = response.data.choices[0].message.content;

      setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
    } catch (error) {
      console.error('OpenAI API error:', error);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Oops! Something went wrong. Please try again.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>AI Mentor 💬</div>
      <div className={styles.chatBody}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={
              msg.from === 'bot' ? styles.botMessage : styles.userMessage
            }
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className={styles.botMessage}>Typing...</div>}
      </div>
      <div className={styles.chatFooter}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default AIMentor;
