const image = document.querySelector('.img-upload__preview img');

// Изменение масштаба изображения
const editPhotoScale = () => {
  const scaleControlSmallerButtonElement = document.querySelector('.scale__control--smaller');
  const scaleControlBiggerButtonElement = document.querySelector('.scale__control--bigger');
  const scaleControlValueElement = document.querySelector('.scale__control--value');
  const SCALE_STEP = 25;
  const SCALE_MIN = 25;
  const SCALE_MAX = 100;

  // Получение текущего значения масштаба
  let scaleValue = parseFloat(scaleControlValueElement.value.replace('%', ''));

  // Обработчик события нажатия на кнопку уменьшения масштаба
  scaleControlSmallerButtonElement.addEventListener('click', () => {
    if (scaleValue > SCALE_MIN) {
      scaleValue -= SCALE_STEP;
    }
    scaleControlValueElement.setAttribute('value', `${scaleValue}%`);
    image.style.setProperty('transform', `scale(0.${scaleValue})`);
  });

  // Обработчик события нажатия на кнопку увеличения масштаба
  scaleControlBiggerButtonElement.addEventListener('click', () => {
    if (scaleValue < SCALE_MAX) {
      scaleValue += SCALE_STEP;
    }
    scaleControlValueElement.setAttribute('value', `${scaleValue}%`);
    image.setAttribute('style', scaleValue === SCALE_MAX ? 'transform: scale(1.00)' : `transform: scale(0.${scaleValue})`);
  });
};

export { editPhotoScale};
