import { connect } from "react-redux";
import App from "../App";
import {loadMyMovieList} from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList: function () {
      const action = loadMyMovieList();
      dispatch(action);
    }
  };
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
