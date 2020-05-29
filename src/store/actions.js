import * as TYPES from './types';

import api from '../services/api';

const { getAds, createAd, editAd, login } = api();

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

export const editAdAction = adToEdit => ({
  type: TYPES.EDIT_AD,
  adToEdit,
});

export const loginUserAction = success => ({
  type: TYPES.USER_LOGIN,
  success,
});

export const setLocalStorage = value => ({
  type: TYPES.SET_LOCAL,
  value,
})

export const checkLocal = () =>
  async function (dispatch) {
    try {
      const isLogged = localStorage.getItem('isLogged');
      if (isLogged) {
        dispatch(setLocalStorage(isLogged));
      }
    } catch (error) {
      console.error(error);
    }
  }

export const userLogin = userInfo =>
  async function (dispatch) {
    try {
      if (userInfo) {
        const { success } = await login(userInfo);
        if (success) {
          dispatch(loginUserAction(success));
          localStorage.setItem('isLogged', success);
          dispatch(setLocalStorage(localStorage.getItem('isLogged')));
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

export const fetchAds = () =>
  async function (dispatch) {
    dispatch(fetchAdsRequest());
    try {
      const ads = await getAds();
      dispatch(fetchAdsSuccess(ads));
    } catch (error) {
      dispatch(fetchAdsFailure(error));
    }
  };

export const adCreation = adToCreate =>
  async function (dispatch) {
    try {
      const ad = await createAd(adToCreate);
      dispatch(createAdAction(ad));
    } catch (error) {
      console.error(error);
    }
  }

export const adEdition = adToEdit =>
  async function (dispatch) {
    try {
      const ad = await editAd(adToEdit);
      dispatch(editAdAction(ad));
    } catch (error) {
      console.error(error);
    }
  }
