import React from 'react';

function ImagePopup(props) {

  return (
    <div className={`popup popup_type_${props.name} ${props.card.link ? 'popup_opened' : ''}`}>
      <div className="popup__image-card">
        <button
          type="button"
          className="popup__close-btn"
          onClick={props.onClose}
          aria-label="Закрыть"
        />
        <img className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <p className="popup__image-name">{props.card.name} </p>
      </div>
    </div>
  );
}

export default ImagePopup;