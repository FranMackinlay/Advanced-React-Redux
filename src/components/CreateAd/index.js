import { connect } from 'react-redux';

import CreateAd from './CreateAd';

import { adCreation } from '../../store/actions';
import { getVisibleAds } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    ads: getVisibleAds(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    adCreation: adToCreate => dispatch(adCreation(adToCreate)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd);
