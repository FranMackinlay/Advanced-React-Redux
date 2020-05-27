import { connect } from 'react-redux';

import EditAd from './EditAd';

import { adEdition } from '../../store/actions';
import { getVisibleAds } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    ads: getVisibleAds(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    adEdition: adToEdit => dispatch(adEdition(adToEdit)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAd);
