import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import {saveMyMovie, removeMyMovie} from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function (txt) {
      const action = saveMyMovie(txt);
      dispatch(action);
    },
    removeMyMovie: function (txt) {
      const action = removeMyMovie(txt);
      dispatch(action);
    },
  };
}


export default connect(null, mapDispatchToProps)(ListToggle);
