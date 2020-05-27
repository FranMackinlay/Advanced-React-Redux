export const getAds = state => state.ads;

export function getVisibleAds(state) {
  const ads = getAds(state);
  const visibleAds = ads;
  return visibleAds;
}
