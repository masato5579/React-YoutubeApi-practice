import React from "react";
import Search from "./Component/Search";
import youtubeApi from "./Api/Youtube";
import VideoList from "./Component/VideoList";
import "./css/App.css";
import VideoPlayer from "./Component/VideoPlayer";

export default class App extends React.Component {
  //state
  state = {
    //videoのメタ情報
    videosMetaInfo: [],
    //videoのid
    selectedVideoId: null,
  };

  onVideoSelected = (videoId) => {
    //videoのidを取得する
    this.setState({ selectedVideoId: videoId });
  };

  onSearch = async (keyword) => {
    //値が帰ってくるまで待機 帰ってきたら再会 async await
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });
    console.log(response);
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
  };

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo}
        />
        <VideoPlayer videoId={this.state.selectedVideoId} />
      </div>
    );
  }
}
