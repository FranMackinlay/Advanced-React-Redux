import * as actions from './actions';
import * as TYPES from './types';
import api from '../services/api';
jest.mock('../services/api.js');

describe('Accion sincrona: loginUserAction', () => {
  test('should create one USER_LOGIN action with success', () => {
    const success = true;
    const expectedAction = {
      type: TYPES.USER_LOGIN,
      success,
    };
    expect(actions.loginUserAction(success)).toEqual(
      expectedAction
    );
  });
});

describe('Accion asincrona: fetchBikes', () => {
  test('should dispatch FETCH_ADS_REQUEST and FETCH_ADS_SUCCESS actions', async () => {
    const dispatch = jest.fn();
    const action = actions.fetchAds();
    const getState = () => { };
    const ads = [];
    api.getAds.mockResolvedValue(ads);

    await action(dispatch, getState);

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: TYPES.FETCH_ADS_REQUEST,
    });

    expect(api.getAds).toHaveBeenCalled();

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: TYPES.FETCH_ADS_SUCCESS,
      ads,
    });
  });
});
