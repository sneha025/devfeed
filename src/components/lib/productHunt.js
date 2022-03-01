import axios from "axios";
const ProductHunt = () => {
  var config = {
    method: "get",
    url: "https://api.producthunt.com/v1/posts?sort_by=votes_count&order=desc&search[featured]=true&per_page=10",
    headers: {
      Authorization: "Bearer -6KkhP0X-uf7McG0BPMDiy6rpQHnrVQA5Tx2vGkce5w",
    },
  };

  return axios(config);
};
export default ProductHunt;
