import axios from "axios";

const KEY = "AIzaSyCDwPheRCdzKrUeKl8mISZ76f5M3k8B4HE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
