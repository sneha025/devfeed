import axios from "axios";
const news = () => {
  var config = {
    method: "get",
    url: "https://api.newscatcherapi.com/v2/latest_headlines?when=24h&topic=tech&lang=en",
    headers: {
      "x-api-key": "xyz",
    },
  };

  return axios(config);
};
export default news;
