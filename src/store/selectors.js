
export const getAds = state => state.ads;
export const getUserLogin = state => state.checkLogin;
export const getLocalCheck = state => state.localChecking;

export function getVisibleAds(state) {
  const ads = getAds(state);
  const visibleAds = ads;
  return visibleAds;
};

export function isUserLoggedIn(state) {
  const isLogged = getUserLogin(state);
  return isLogged;
};

export function localGetter(state) {
  const local = getLocalCheck(state);
  return local;
}
