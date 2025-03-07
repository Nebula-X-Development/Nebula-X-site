"use strict";
let destination = "";

try {
  destination = new URL(location.hash.slice(1)).toString();
} catch (err) {
  alert(`The function has failed, let Above know. Error:\n${err}`);
  throw err;
}

registerSW()
  .then(() => {
    window.open(
      __uv$config.prefix + __uv$config.encodeUrl(destination),
      "_self"
    );
  })
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });
