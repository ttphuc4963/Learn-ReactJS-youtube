import React from 'react';

class Search extends React.Component {
  state = { term: '' };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="fields">
            <label>Youtube Search</label>
            <input
              type="text"
              placeholder="Search something..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
      //
    );
  }
}

export default Search;
