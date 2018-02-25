/*
export function loadUsers() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_USERS"
    });
    fetch("/users")
   .then( (response) => {
     return response.json();
   }).then((users) => {
     dispatch(usersLoaded(users));
   });
  };
}
export function usersLoaded(users) {
  return {
    type: "USERS_LOADED",
    value: users
  };
}

export function createProduct(product) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}



*/

export function loadMyMovieList() {
  return function (dispatch) {
    fetch("/movies")
   .then( (response) => {
     return response.json();
   }).then((movies) => {
     dispatch(myMovieListLoaded(movies));
   });
  };
}

export function myMovieListLoaded(movies) {
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  };
}


export function loadSearch(searchTerm) {
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH"
    });
     // fetch("https://api.themoviedb.org/3/movie/550?api_key=22ca1401294bb58aee9c072202b1f70e")
    // fetch("https://api.themoviedb.org/3/movie/550?api_key=22ca1401294bb58aee9c072202b1f70e")
    fetch("https://api.themoviedb.org/3/search/movie?api_key=22ca1401294bb58aee9c072202b1f70e&query=" + searchTerm)
   .then( (response) => {
    // console.log("respose from fetch  " + response.json)
     return response.json();
   }).then((movies) => {
    // console.log("load serach ran")
  //   console.log(movies.results)
     dispatch(searchLoaded(movies));
   });
  };
}

export function searchLoaded(movies) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
  };
}

export function saveMyMovie(movie) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then(() => dispatch(loadMyMovieList()));
  };
}

export function removeMyMovie(id) {
  return function (dispatch) {
    fetch("/movies/" + id, {
      method: "DELETE",
      // headers: {"Content-Type": "application/json"},
      // body: JSON.stringify(id)
    }).then(() => dispatch(loadMyMovieList()));
  };
}
