import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
      <form>
        <FormGroup>
          <ControlLabel>Search Videos</ControlLabel>
          <FormControl
            id='search_text'
            type='text' placeholder='Search for the videos on Youtube...' />
          <Button type='submit'>Search it!</Button>
        </FormGroup>
      </form>
    </div>);
  }
}
