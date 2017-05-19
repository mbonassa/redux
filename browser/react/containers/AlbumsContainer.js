import React from 'react';
import { Link } from 'react-router';
import Store from '../store';
import Albums from '../components/Albums'
import {fetchAlbumsFromServer} from '../action-creators/albums';

class AlbumsContainer extends React.Component {
  constructor() {
    super()
    this.state = Store.getState().albums
  }

  componentDidMount(){
    this.unsubscribe = Store.subscribe(() =>
      this.setState(Store.getState().albums)
    )
    Store.dispatch(fetchAlbumsFromServer());
  }

  componentWillUnmount(){
    this.unsubscribe;
  }

  render() {
    console.log('container ran')
    return (
        <Albums albums={this.state.albums} />
    )
  }
} 

export default Albums;
