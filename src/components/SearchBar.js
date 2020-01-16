import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="text"
              id="search"
              onChange={this.onChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
