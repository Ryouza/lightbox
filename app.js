const Hue = require('philips-hue');
const configFile = `${__dirname}/conf/hue.json`;

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
    toggleLight(Object.keys(lights)[0], Object.values(lights)[0]);
  });
