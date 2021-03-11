import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';


const SampleComponent = () => {
    return (
      <View>
        <Text>Maulana</Text>
      <Maulana />
      <Photo />
      <TextInput style={{borderColor: 'red', borderWidth: 2}}/>
      <BoxComponen />
      <BoxPhoto />
      </View>
    )
  }
  
  const Maulana = () => {
    return <Text>Ahmad</Text>
  }
  
  //function componen
  const Photo = () => {
    return (
    <Image source={{uri: 'https://placeimg.com/100/100/animals'}} style={{width: 100, height: 100}}/>
    );
  }
  
  //class componen
  class BoxComponen extends Component {
    render() {
      return <Text>Ini componen dari class</Text>
    }
  }
  
  class BoxPhoto extends Component {
    render() {
      return(
         <Image source={{uri: 'https://placeimg.com/100/100/any/grayscale'}} style={{width: 100, height: 100}}/>
         );
    }
  }

  export default SampleComponent;