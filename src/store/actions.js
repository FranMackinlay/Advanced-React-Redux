import * as TYPES from './types';

import api from '../services/api';

const { getAds, createAd } = api();

export const fetchAdsRequest = () => ({
  type: TYPES.FETCH_ADS_REQUEST,
});

export const fetchAdsFailure = error => ({
  type: TYPES.FETCH_ADS_FAILURE,
  error,
});

export const fetchAdsSuccess = ads => ({
  type: TYPES.FETCH_ADS_SUCCESS,
  ads: ads.results,
});

export const createAdAction = adToCreate => ({
  type: TYPES.CREATE_AD,
  adToCreate,
});

export const fetchAds = () =>
  async function (dispatch, getState) {
    dispatch(fetchAdsRequest());
    try {
      const ads = await getAds();
      dispatch(fetchAdsSuccess(ads));
    } catch (error) {
      dispatch(fetchAdsFailure(error));
    }
  };

export const adCreation = adToCreate =>
  async function (dispatch, getState) {
    try {
      const ad = await createAd(adToCreate);
      dispatch(createAdAction(ad));
    } catch (error) {
      console.error(error);
    }
  }
