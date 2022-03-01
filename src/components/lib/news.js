import axios from "axios";
const news = () => {
  var config = {
    method: "get",
    url: "https://api.newscatcherapi.com/v2/latest_headlines?when=24h&topic=tech&lang=en",
    headers: {
      "x-api-key": "q53LzCilgE9-XOdQW62scg_-aj4duGIYMVFqZ-m678o",
    },
  };

  return axios(config);
};
export default news;
