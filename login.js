const Hue = require('philips-hue');

const myHue = new Hue();

return myHue.getBridges()
  .then(bridges => {
    console.log(bridges);
    return myHue.auth(bridges[0])
  })
  .then(username => console.log(username));
