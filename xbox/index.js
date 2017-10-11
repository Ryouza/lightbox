const got = require('got');

const XBOX_API_URL = 'https://xboxapi.com/v2';

class XboxLiveClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.currentXUID = null;
  }

  getXUID(gamertag) {
    const url = gamertag
      ? `${XBOX_API_URL}/xuid/${gamertag}`
      : `${XBOX_API_URL}/accountXuid`;

    return got(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-AUTH': this.apiKey
      }
    }).then(response => {
      this.currentXUID = response;
      return response;
    });
  }
}

module.exports = XboxLiveClient;
