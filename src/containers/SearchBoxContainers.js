import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: function (txt) {
      const action = loadSearch(txt);
      console.log("seraching")
      dispatch(action);
    }
  };
}


export default connect(null, mapDispatchToProps)(SearchBox);
