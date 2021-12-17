const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};
const generateOffers = () => [
  {
    title: 'Order Uber',
    price: '20',
  },
  {
    title: 'Upgrade to a business class',
    price: '20',
  },
  {
    title: 'Order Yandex',
    price: '2000',
  },
  {
    title: 'Order Econom',
    price: '3600',
  },
  {
    title: 'Turn on music',
    price: '36000',
  }
];
const generatePhoto = () => ({
  src: 'http://picsum.photos/248/152?r=(getRandomInteger())',
});

const generateDestination = () => {
  const destinations = [
    'London',
    'New-York',
    'Moscow',
    'Abakan'
  ];

  const randomIndex = getRandomInteger(0, destinations.length - 1);

  return destinations[randomIndex];
};

export const generateRoutePoint = () => ({
  id: getRandomInteger(),
  kindOfRoutePoint: 'Bus',
  destination: generateDestination(),
  offers: generateOffers(),
  destinationDescription: generateDescription(),
  photo: generatePhoto(),
  price: '660',
  dateTrip: '2019-03-18T22:55:56',
  dateFrom: '2019-03-18T10:30:56',
  dateTo: '2019-03-20T11:00:13',
  duration: '30M',
  isFavorite: Boolean(getRandomInteger(0, 1))
});

