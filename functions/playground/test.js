var axios = require('axios');
var data = '';

var config = {
  method: 'post',
  url: 'https://api.telegram.org/botYOURAPIKEY/setWebhook?url=YOURURL',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
