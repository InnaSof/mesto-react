import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData).map((item) => ({
          id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes.length
        }));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-wrapper">
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Аватар"
            />
            <button
              type="button"
              className="profile__avatar-edit"
              onClick={props.onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__info-wrap">
              <h1 className="profile__title">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={props.onEditProfile}
                aria-label="Редактировать"
              />
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            type="button"
            className="profile__add-button"
            onClick={props.onAddPlace}
            aria-label="Добавить"
          />
        </section>
        <section className="elements">
          <ul className="elements__list">
            {cards.map((card) => (
              <Card
                onCardClick={props.onCardClick}
                card={card}
                key={card._id}
              />
            ))}
          </ul>
        </section>
      </main>
  );
}

export default Main;