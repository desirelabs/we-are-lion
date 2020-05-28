const Cookies = require("js-cookie");
const ReactGA = require("react-ga");

exports.onRouteUpdate = ({ location, prevLocation }) => {
  const cookie = Cookies.get("consent");
  if (cookie === "agree") {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }
};
