import React from 'react';

function PopupWithForm(props) {
  return (
      <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            onClick={props.onClose}
            aria-label="Закрыть"
          />
          <h3 className="popup__title">{props.title}</h3>
          <form
            className="popup__form"
            name={props.formName}
            action="#"
            method="post"
            noValidate=""
            >
              {props.children}
            <button
              type="submit"
              className="popup__submit-btn"
              aria-label="Сохранить"
              >
                {props.submitText}
            </button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;