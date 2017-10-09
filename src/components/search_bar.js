import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap'

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term : ''
    }
  }

  handleChange = (term) => {
    this.setState ({term})
    this.props.videoSearch(term)
  }

  render() {
    return (
      <div className = "search-bar">
      <form>
        <FormGroup>
          <FormControl
            id='search_text'
            type='text' placeholder='Search for the videos on Youtube...'
            value={this.state.term}
            onChange={event => this.handleChange(event.target.value)}/>
        </FormGroup>
      </form>
    </div>);
  }
}
