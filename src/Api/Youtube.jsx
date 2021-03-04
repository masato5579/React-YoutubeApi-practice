import axios from "axios";

const KEY = "AIzaSyBzWD-kIO2ic2xKEEt8Uq-x_y-yqilzVrA";

export default axios.create({
  //他のバックエンドのURLを指定
  baseURL: "https://www.googleapis.com/youtube/v3",
  //こちらの配列をbaseURLにリクエストを行う
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
  headers: {},
});
