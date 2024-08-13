import React from "react";
import styles from "./Modal.module.css"

const Modal = ({ isOpen, onClose, children }) => {
   
        if (!isOpen) return null;
  return (
    <div>
      <div className="ModalIframe">
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
