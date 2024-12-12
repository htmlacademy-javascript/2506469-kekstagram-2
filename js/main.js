
const IdPhotoRange = {
  MIN: 1,
  MAX: 25
};

const IdUrlRange = {
  MIN: 1,
  MAX: 25
};

const LikesRange = {
  MIN: 15,
  MAX: 200
};

const CommentsRange = {
  MIN: 0,
  MAX: 30
};

const IdMessagerRange = {
  MIN: 1,
  MAX: 1111
};

const AVATAR_RANGE = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const MessagerRange = {
  MIN: 1,
  MAX: 2
};

const DESCRIPTION = [
  'Закат на берегу моря',
  'Старинная улочка европейского города',
  'Котенок спит на кровати',
  'Заснеженные склоны Хибин',
  'Букет цветов на столе',
  'Велосипед пристегнутый на велопарковке',
  'Чашка горячего кофе',
  'Осенний парк с опавшей листвой',
  'Маяк на скалистом берегу',
  'Шмель на цветке',
  'Деревенский домик в глухом лесу',
  'Отражение звезд на поверхности Ладоги',
  'Птенцы в гнезде',
  'Радуга над зеленым полем после дождя',
  'Следы на песчаном пляже'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Довакин',
  'Алдуин',
  'Шеппард',
  'Геральт',
  'Супер Марио',
  'Соник',
  'Кратос',
  'Солид Снейк',
  'Клод Страйф',
  'Лара Крофт',
  'Наруто',
  'Элли',
  'Джоель',
  'Сэм Фишер'
];

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

let generatePhoto = getId();

let generateComment = getId();

const createComment = () => (
  {
    id: generateComment(),
    avatar: AVATAR_RANGE[getRandomInt(0, AVATAR_RANGE.length -1)],
    message: MESSAGE[getRandomInt(0, MESSAGE.length -1)],
    name: NAME[getRandomInt(0, NAME.length -1)],
  }
);

const createPhoto = () => {
  let id = generatePhoto();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTION[getRandomInt(0, DESCRIPTION.length -1)],
    likes: getRandomInt(LikesRange.MIN, LikesRange.MAX),
    comment: Array.from({length: getRandomInt(CommentsRange.MIN, CommentsRange.MAX)}, () => createComment()),
  }
}

const array = Array.from({length: 25}, () => createPhoto())

console.log(array);
