import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

export default class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const UNSPLASH_SEARCH_PHOTOS_ENDPOINT =
      "https://api.unsplash.com/search/photos";
    const UNSPLASH_ACCESS_KEY =
      "aee528a67eadbc53d523c43aadd069177714fb17516dd8c176a69cbf27054b99";

    const response = await axios.get(UNSPLASH_SEARCH_PHOTOS_ENDPOINT, {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}
