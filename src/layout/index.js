// App.js
import React, { useState } from "react";
import "./styles.modules.css";
import { FaHome, FaList, FaSyncAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Layout({ children }) {
  const Sidebar = () => {
    const navigate = useNavigate();
  const goTolist = () => {
    navigate('/list');
  };
    return (
      <div className="sidebar">
        <div className="avatar-container">
          <img src="images/avtra.png" alt="User Avatar" className="avatar" />
        </div>
        <div className="menu">
          <FaHome className="icon" />
          <FaList onClick={goTolist} className="icon icon2" />
          <FaSyncAlt className="icon" />
        </div>
      </div>
    );
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };
  const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <img src="images/bikal-logo.png" alt="bikal logo" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <div className="interaction">
          <button className="interaction-btn" >
            {isOpen ? "Close Chat" : "Open Chat"}
            
            <div className="chat-container">             
              {isOpen && (
                <div className="chat-box">
                  <div className="chat-header">
                    <h3>Chat</h3>
                    <button className="close-btn" onClick={toggleChatBox}>
                      X
                    </button>
                  </div>
                  <div className="chat-body">
                    <p>Welcome to the chat! How can I help you?</p>
                    {/* Add chat messages here */}
                  </div>
                  <div className="chat-footer">
                    <input type="text" placeholder="Type a message..." />
                    <button>Send</button>
                  </div>
                </div>
              )}
            </div>
            <div className="interactionWithText">
              <p>Interact with</p>
              <img onClick={toggleChatBox} className="img-fluid" src="images/diaogXR-with-Icon.png" />
            </div>
          </button>
        </div>
      </header>
    );
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
