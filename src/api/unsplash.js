import axios from "axios";

const UNSPLASH_BASE_URL = "https://api.unsplash.com";
const UNSPLASH_ACCESS_KEY =
  "aee528a67eadbc53d523c43aadd069177714fb17516dd8c176a69cbf27054b99";

export default axios.create({
  baseURL: UNSPLASH_BASE_URL,
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
  }
});
