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

export {getRandomInt, getId};

