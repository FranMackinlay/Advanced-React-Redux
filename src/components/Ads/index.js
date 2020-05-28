import { connect } from 'react-redux';

import Ads from './Ads';

import { getVisibleAds, localGetter } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    ads: getVisibleAds(state),
    localCheck: localGetter(state),
  };
}

export default connect(mapStateToProps)(Ads);
