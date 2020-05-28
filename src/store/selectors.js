
export const getAds = state => state.ads;
export const getUserLogin = state => state.checkLogin;
export const getLocalCheck = state => state.localChecking;

export function getVisibleAds(state) {
  const ads = getAds(state);
  const visibleAds = ads;
  return visibleAds;
};

export function isUserLoggedIn(state) {
  console.log('SELECTOR', state);
  const isLogged = getUserLogin(state);
  return isLogged;
};

export function localGetter(state) {
  console.log('LOCAL GETTER STATE', state);
  const local = getLocalCheck(state);
  console.log('LOCAL', local);
  return local;
}
