import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search_key : ''
    }
  }

  handleChange = (e) => {
     this.setState({ search_key: e.target.value });
  }

  handleClick = () => {
    this.props.go_search(this.state.search_key)
  }

  render() {
    return (
      <div>
      <form>
        <FormGroup>
          <ControlLabel>Search Videos</ControlLabel>
          <FormControl
            id='search_text'
            type='text' placeholder='Search for the videos on Youtube...'
            value={this.state.search_key}
            onChange={this.handleChange}/>
          <Button type='submit' onClick={this.handleClick}>Search it!</Button>
        </FormGroup>
      </form>
    </div>);
  }
}
