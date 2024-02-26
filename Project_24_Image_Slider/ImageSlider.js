import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const images = [
  { uri: 'https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180' },
  { uri: 'https://tse4.mm.bing.net/th?id=OIP.XahRQHnmZYdKTkYxKAYHmAHaFj&pid=Api&P=0&h=180' },
  { uri: 'https://tse2.mm.bing.net/th?id=OIP.gwvaCTBDdkKS-TU9IQcjngHaFj&pid=Api&P=0&h=180' }
];

const ImageSlider = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.uri }} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 40} // Adjust the width of the item as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: width - 40,
    height: 300, // Adjust the height of the slide as needed
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ImageSlider;
