/* global React, ReactDOM, movies */

let Movie  = React.createClass({
  propTypes:{
    movie: React.PropTypes.object.isRequired
  },
  render(){
    return(
      React.createElement('li', {},
        React.createElement(MoviesTitle, {title: this.props.movie.title}),
        React.createElement(MoviesDesc, {desc: this.props.movie.desc}),
        React.createElement(MoviesPoster, {poster: this.props.movie.poster})
      )
    );
  }
}),

MoviesTitle = React.createClass({
  propsType:{
    title: React.PropTypes.string.isRequired
  },
  render(){
    return React.createElement('h1', {}, this.props.title);
  }
}),

MoviesDesc = React.createClass({
  propsType:{
    desc: React.PropTypes.string.isRequired
  },
  render(){
    return React.createElement('p', {}, this.props.desc);
  }
}),

MoviesPoster = React.createClass({
  propsType:{
    poster: React.PropTypes.object.isRequired
  },
  render(){
    return React.createElement('img', {src: this.props.poster});
  }
}),

MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },
  render(){
    let moviesElements = this.props.movies.map((movie) => {
      return React.createElement(Movie, {movie, key: movie.id});
    });
    return React.createElement('ul', {}, moviesElements);
  }
}),

element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {movies})
  );

ReactDOM.render(element, document.getElementById('app'));