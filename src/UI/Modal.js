import React from 'react';
import {createPortal} from 'react-dom';

const Modal = ({children,title,closeModal}) => {
    return (

        createPortal(
        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__content">
                <div className="modal__close" onClick={closeModal}>x</div>
                <h2 className="modal__h2">{title}</h2>
                {children}
            </div>
        </div>

      ,document.getElementById('modal')  
      
      )

  );

};


export default Modal;