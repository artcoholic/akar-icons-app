import amplitude from "amplitude-js";

amplitude.getInstance().init(process.env.REACT_APP_API_KEY, null, {
  // optional configuration options
  includeUtm: true,
  includeGclid: true,
  includeReferrer: true,
});
export { amplitude };
