import axios from "axios";
const fetchFromHashnode = () => {
  const hashnode_url = "https://api.hashnode.com";

  const query = `query{
  storiesFeed(type:FEATURED, page:0){
    slug
    author{
      publicationDomain
    }
    title
    totalReactions
    coverImage
    brief
  }
}`;

  return axios({
    url: hashnode_url,
    method: "post",
    data: {
      query,
    },
  });
};

export default fetchFromHashnode;
