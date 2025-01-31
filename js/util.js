import { onEscapeDown } from "./edit-photo-modal";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getId = () => {
  let id = 1;
  function increasesId () {
    return id++;
  }
  return increasesId;
}

// Показывает сообщение об ошибке при загрузке данных
const showLoadErrorMessage = () => {
  const errorTemplateElement = document.querySelector('#data-error').content;
  const errorShowTime = 5000;

  cloneElement(errorTemplateElement);
  setTimeout(() => {
    document.querySelector('.data-error').classList.add('hidden');
  }, errorShowTime);
};


// Клонирование элемента
const cloneElement = (template) => {
  const fragmentElement = document.createDocumentFragment();
  const newElement = template.cloneNode(true);
  fragmentElement.appendChild(newElement);
  document.body.appendChild(fragmentElement);
};

// Закрытие пользвательских сообщений
const closeUserMessage = (button, message) => {
  button.addEventListener('click', () => {
    message.remove();
  });
}

// Отображение сообщений для пользователя
const showMessage = (templateSelector, messageClass, buttonSelector) => {
  const templateElement = document.querySelector(templateSelector).content;
  cloneElement(templateElement);
  const message = document.querySelector(messageClass);
  const closeButton = message.querySelector(buttonSelector);

  closeUserMessage(closeButton, message, messageClass);
};


//  Отображение сообщения об успешной отправке данных
const showSendSuccessMessage = () => {
  showMessage('#success', '.success', '.success__button');
};

//  Отображение сообщения об ошибке при отправке данных
const showSendErrorMessage = () => {
  document.removeEventListener('keydown', onEscapeDown); // Отключить глобальный обработчик
  showMessage('#error', '.error', '.error__button');
};

export {getRandomInt, getId, showSendErrorMessage, showSendSuccessMessage, showLoadErrorMessage};

