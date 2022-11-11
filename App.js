import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated, Text, Dimensions} from 'react-native';
import Lottie from 'lottie-react-native';

const {height, width} = Dimensions.get('window');

const Animation = () => {
  return <Lottie source={require('./src/splash.json')} autoPlay loop />;
};
const App = () => {
  const [isVisible, setisVisible] = useState(true);

  const width = new Animated.Value(0);
  const height = new Animated.Value(0);

  const IMAGE = './src/Logo_1.png';

  useEffect(() => {
    Animated.timing(width, {
      toValue: 360,
      duration: 1200,
      useNativeDriver: false,
    }).start();

    Animated.timing(height, {
      toValue: 100,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  }, []);

  const Hide_Splash_Screen = () => {
    setisVisible(false);
  };

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      Hide_Splash_Screen();
    }, 3000);
    return () => clearTimeout(myTimeout);
  }, []);

  const Splash_Screen = () => {
    return (
      <View style={styles.container}>
        <Animation />
      </View>
    );
  };

  return (
    <>
      {isVisible === true ? (
        Splash_Screen()
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>
            Fait avec React Native sur Webstorm :)
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: '800',
  },
});

export default App;