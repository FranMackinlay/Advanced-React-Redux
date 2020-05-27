import { connect } from 'react-redux';

import Ads from './Ads';

import { getVisibleAds } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    ads: getVisibleAds(state),
  };
}
export default connect(mapStateToProps)(Ads);
