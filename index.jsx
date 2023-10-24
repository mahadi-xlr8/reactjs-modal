import './style.css'
import React from 'react';
const ModalWrapper = ({ children, isOpen, onClose, backgroundColor, position }) => {
    const positionValue = position || {
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    };
    return isOpen ? (
      <>
        <div
          style={{
            backgroundColor: backgroundColor || "rgb(1,1,1,0.6)",
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 10000,
          }}
          onClick={onClose}
        ></div>
        <div
          style={{
            ...positionValue,
            position: "fixed",
            zIndex: 10000,
          }}
          id="modal-content"
        >
          {children}
        </div>
      </>
    ) : null;
  };
  
  export default ModalWrapper;
  