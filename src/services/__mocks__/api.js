export default () => ({
  getAds: jest
    .fn()
    .mockResolvedValueOnce({ results: [] })
    .mockRejectedValueOnce('error'),
});
