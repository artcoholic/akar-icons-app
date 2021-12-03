import amplitude from "amplitude-js";

amplitude.getInstance().init("809560a36a26606c75509110492c9ab4", null, {
  // optional configuration options
  includeUtm: true,
  includeGclid: true,
  includeReferrer: true,
});
export { amplitude };
