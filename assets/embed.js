"use strict";

const table1 = ["https://now.gg.zkit.above.gay", "https://now.gg.zkit.above.gay/hub", "https://now.gg.zkit.above.gay/", "https://now.gg.zkit.above.gay/hub/", "http://now.gg.zkit.above.gay", "http://now.gg.zkit.above.gay/hub", "http://now.gg.zkit.above.gay/", "http://now.gg.zkit.above.gay/hub/"];
const table2 = { 
  "https://now.gg": "https://now.gg.zkit.above.gay/hub",
  "https://now.gg/": "https://now.gg.zkit.above.gay/hub",
  "http://now.gg": "https://now.gg.zkit.above.gay/hub",
  "http://now.gg/": "https://now.gg.zkit.above.gay/hub"
};

let destination = "";

try {
  destination = new URL(location.hash.slice(1)).toString();
} catch (err) {
  alert(`Bad # string or bad URL. Got error:\n${err}`);
  throw err;
}

registerSW()
  .then(() => {
    if (table1.includes(destination)) {
      // If in table1, open destination directly
      window.open(destination, "_self");
    } else if (table2[destination]) {
      // If in table2, open the alternative destination
      window.open(__uv$config.prefix + __uv$config.encodeUrl(table2[destination]), "_self");
    } else {
      window.open(__uv$config.prefix + __uv$config.encodeUrl(destination), "_self");
    }
  })
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });
