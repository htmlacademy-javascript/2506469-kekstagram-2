
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

const IdMessagerange = {
  MIN: 1,
  MAX: 1111
};

const AvatarRange = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const MessageRange = {
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

const getPhotoId = () => {
  let photoId = 1;
  function increasesPhotoId () {
    return photoId++;
  }
  return increasesPhotoId;
}

let funcPhoto = getPhotoId();

const getCommentId = () => {
  let commentId = 1;
  function increasesCommentId () {
    return commentId++;
  }
  return increasesCommentId;
}

let funcComment = getCommentId();



const createComment = () => (
  {
    id: funcComment(),
    avatar: AvatarRange[getRandomInt(0, AvatarRange.lenght -1)],
    message: MESSAGE[getRandomInt(0, MESSAGE.lenght -1)],
    name: NAME[getRandomInt(0, NAME.lenght -1)],
  }
);

const createPhoto = () => {
  let id = funcPhoto();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTION[getRandomInt(0, DESCRIPTION.lenght -1)],
    likes: getRandomInt(LikesRange.MIN, LikesRange.MAX),
    comment: Array.from({lenght: getRandomInt(CommentsRange.MIN, CommentsRange.MAX), createComment}),
  }
}

let array = [];

for (let i = 1; i <= 25; i++) {
  array.push(createPhoto());
}

console.log(array);
