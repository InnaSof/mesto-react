import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card){
    setSelectedCard(card);
  }

  // Функция-обработчик для закрытия всех попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page__container">
      <>
        <Header />
        <Main
          onEditAvatar = {handleEditAvatarClick}
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm /* Форма редактирования профиля */
          name="edit"
          title="Редактировать профиль"
          formName="form-profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          submitText="Сохранить"
          >
             <input
               className="popup__input"
               type="text"
               placeholder="Имя"
               defaultValue=""
               name="name"
               id="name-input"
               required=""
               minLength={2}
               maxLength={40}
             />
             <span id="name-input-error" className="popup__error" />
             <input
               className="popup__input"
               type="text"
               placeholder="Описание"
               defaultValue=""
               name="description"
               id="job-input"
               required=""
               minLength={2}
               maxLength={200}
             />
             <span id="job-input-error" className="popup__error" />
        </PopupWithForm>

        <PopupWithForm /* Форма добавления карточки */
          name="card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          submitText="Сохранить"
          >
           <input
              className="popup__input"
              type="text"
              placeholder="Название"
              defaultValue=""
              name="card-name"
              id="card-input"
              required=""
              minLength={2}
              maxLength={30}
            />
            <span id="card-input-error" className="popup__error" />
            <input
              className="popup__input"
              type="url"
              placeholder="Ссылка на картинку"
              defaultValue=""
              name="card_url"
              id="link-input"
              required=""
            />
            <span id="link-input-error" className="popup__error" />
        </PopupWithForm>

        <PopupWithForm /* Форма запрос на удаление "Вы уверены?" */
          name="confirm"
          title="Вы уверены?"
          formName="form-confirm"
          submitText="Да"
        />

        <PopupWithForm /* Форма обновления аватара */
          name="edit-avatar"
          title="Обновить аватар"
          formName="form-avatar"
          submitText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          >
          <input className="popup__input popup__input_avatar-url"
            type="url"
            placeholder="Ссылка на картинку"
            defaultValue=""
            name="avatar"
            id="avatar-input"
            required
          />
          <span id="avatar-input-error" className="popup__error"></span>
        </PopupWithForm>

        <ImagePopup /* Форма открытия попапа картинки */
          name="image"
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </>
    </div>
  );
}

export default App;