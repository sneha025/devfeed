import axios from "axios";
const ProductHunt = () => {
  var config = {
    method: "get",
    url: "https://api.producthunt.com/v1/posts?sort_by=votes_count&order=desc&search[featured]=true&per_page=10",
    headers: {
      Authorization: "Bearer -xyz",
    },
  };

  return axios(config);
};
export default ProductHunt;
