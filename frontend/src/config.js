const config = require("./config.json");
const pkg = require("../package.json");

const initCap = s =>
  s
    .split("-")
    .map(el =>
      typeof el !== "string" ? el : el.charAt(0).toUpperCase() + el.slice(1)
    )
    .join(" ");

function getConfig() {
  let configs = Object.assign({}, config, { title: initCap(pkg.name) });
  return configs;
}

module.exports = { REACT_APP_CONFIG: getConfig() };
