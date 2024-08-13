// App.js
import React, { useState } from "react";
import "./styles.modules.css";
import { FaHome, FaList, FaSyncAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

function Layout({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const Sidebar = () => {
    const navigate = useNavigate();
    const goTolist = () => {
      navigate("/list");
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
          <button onClick={handleOpenModal} className="interaction-btn">
            <div className="interactionWithText">
              <p>Interact with</p>
              <img className="img-fluid" src="images/diaogXR-with-Icon.png" />
            </div>
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Interact With</h2>
                <iframe
                    src="https://childrenservice.streamlit.app/~/+/#cs-gpt"
                    title="Children Service"
                    width="100%"
                    height="700px">
                </iframe>
            </Modal>
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
