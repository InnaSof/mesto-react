import React from 'react';

function Card(props) {

function handleClick() {
  props.onCardClick(props.card);
}

  return (
      <li className="element">
        <button
          type="button"
          className="element__delete-button"
          aria-label="Удалить"
        />
        <img className="element__image"
             onClick={handleClick}
             src={props.card.link}
             alt={props.card.name}
        />
        <div className="element__card">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__like">
            <button
              type="button"
              className="element__like-button"
              aria-label="Лайк"
            />
            <span className="element__like-counter">{props.card.likes.length}</span>
          </div>
        </div>
      </li>
  );
}

export default Card;