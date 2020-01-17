import React from "react";

import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

export default class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const SEARCH_PHOTOS_ENDPOINT = "/search/photos";

    const response = await unsplash.get(SEARCH_PHOTOS_ENDPOINT, {
      params: {
        query: term
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
