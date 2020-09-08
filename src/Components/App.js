import Homepage from "./Homepage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    listings: state,
    randomFacts: [],
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));
export default App;
