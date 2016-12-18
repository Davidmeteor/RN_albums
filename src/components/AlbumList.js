// One component, one file
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
// "./" means the current folder
import AlbumDetail from './AlbumDetail';

//Class component
class AlbumList extends Component {

  state = { albums: [] }; // step1: initial state, albums is the empty array

  // this method will be automatically executed as soon as the component be rendered to the screen
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    // Call the API to get the data from internet when the component is loaded
    // this http request is asynchronous
    // use the ".then" statement to handle the data from http response
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      //.then(response => console.log(response));
      // step2: tell component state to update the albums array when we fetch the data
      // setState: update component state and re-render the screen
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    //albums here is an array,
    // by calling the map() function,
    // we will return an new array with the return value of the inside fucntion
    // here, the element of this NEW array is "album"
    // Pass "album" as the props to the child component AlbumDetail
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
      // here the "key" is to eliminate the warning message from React due to the performance issue
      // React use this key to figure out which item in the list is updated
      // We usually use the unique id as key, like album.id
      // But somehow, we don't have it here and we can use the title alternatively

    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Functional component: used to return static JSX data
/*
const AlbumList = () => {
  return (
    <View>
      <Text>Album List!!!</Text>
    </View>
  );
};
*/

export default AlbumList;
