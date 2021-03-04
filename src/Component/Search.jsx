import React from "react";

class Search extends React.Component {
  state = { title: "" };

  onSearchChanged = (e) => {
    const _title = e.target.value;
    console.log(_title);

    this.setState({ title: _title });
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.title);
    //onSearchの引数がtitle
    this.props.onSearch(this.state.title);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input
              id="video-search"
              type="text"
              placeholder="Enter Search keyword"
              onChange={this.onSearchChanged}
              value={this.state.title}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
