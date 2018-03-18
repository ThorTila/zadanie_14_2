/* global React, ReactDOM */
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'https://www.harrypottermovieposters.com/wp-content/uploads/2013/08/harry-potter-and-the-order-of-the-phoenix-movie-poster-style-d.jpg',
    posterAlt: 'Plakat filmu Harry Potter'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'http://ocdn.eu/images/pulscms/NDM7MDMsMCwyZDAsMSwx/6aa256421ac366f026c59dd255320a42.jpg',
    posterAlt: 'Plakat filmu Król Lew'
  },
  {
    id: 3,
    title: 'Piraci z karaibów',
    desc: 'Film o piratach z karaibów',
    poster: 'https://static.posters.cz/image/1300/47521.jpg',
    posterAlt: 'Plakat filmu Piraci z Karaibów'
  },
  {
    id: 4,
    title: 'Thor',
    desc: 'Film o Thorze',
    poster: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/5a/Thor_Official_Poster.jpg/revision/latest?cb=20121220212004',
    posterAlt: 'Plakat filmu o Thorze'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster, alt: movie.posterAlt})
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(element, document.getElementById('app'));