import { connect } from 'react-redux';

import Login from './Login';

import { userLogin } from '../../store/actions';
import { getVisibleAds, isUserLoggedIn } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    ads: getVisibleAds(state),
    isUserLoggedIn: isUserLoggedIn(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    userLogin: userInfo => dispatch(userLogin(userInfo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
