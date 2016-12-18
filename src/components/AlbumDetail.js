import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Use functional component here due to we only need to present the static data
// original version
// const AlbumDetail = (props) => {
// Here, we destructure the props to album and define as the local var
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  // destructure the style to "styles"
  // Originally, we need to use, like "style=styles.thumbnailStyle"

  // Here, the onPress is the function which is defined by myself
  // It's not the default function of TouchableOpacity

  const {
    thumbnailStyle,
    headerTextStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;

  function LinkToWeb(webpath) {
    return Linking.openURL(webpath);
  }

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => LinkToWeb(url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    // here, we use this flex and width statement to make the image full width of this card section
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
