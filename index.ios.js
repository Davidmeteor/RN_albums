// index.ios.js - place code in her for IOS!


// import a library to help creating the Component
import React from 'react';
import { AppRegistry, View } from 'react-native';

// Nested component inside App
// need to provide relative path if we want to import our library
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a Component
// component is the javascript function to return some JSX
// which can place the screen of mobile device
//<Header /> is equal to <Header></Header>
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
// Tell ReactNative to render the applcation called 'albums'
// Second, pass the function to return the first component to render our application
