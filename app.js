const Hue = require('philips-hue');
const XboxLiveClient = require('./xbox');

const configFile = `${__dirname}/conf/hue.json`;

require('dotenv').config();

const xboxClient = new XboxLiveClient(process.env.XBOX_API_KEY);
console.log(xboxClient);

xboxClient.getXUID('Ryouza');

const myHue = new Hue();

function toggleLight(id, light) {
  if (light.state.on) {
    myHue.light(id).off();
  } else {
    myHue.light(id).on();
  }
}

return myHue.login(configFile)
  .then(() => myHue.getLights())
  .then(lights => {
    console.log(Object.keys(lights).length + ' lights');
    // toggleLight(Object.keys(lights)[0], Object.values(lights)[0]);
  });
