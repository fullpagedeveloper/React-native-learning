import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import macbook from './macbook.jpg';

const ComponentCardView = () => {
    return (
        <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8}}>
        <Image source={macbook} style={{width: 188, height: 107, borderRadius: 8}}/>
        <Text style={{marginTop: 16, fontWeight: 'bold', fontSize: 14}}>Macbook Pro 2040</Text>
        <Text style={stylely.text}>Rp. 2000.000</Text>
        <Text style={{marginTop: 12, fontWeight: 'bold', fontSize: 12}}>Jakarta Pusat</Text>
        <View style={{backgroundColor: '#6fcf97', paddingVertical: 6, borderRadius: 25, marginTop: 20}}>
          <Text style={{textAlign: 'center', color: 'white'}}>BELI</Text>
        </View>
      </View>
    )
  }
  
  //styleSheet
  const stylely = StyleSheet.create({
    text: {
      fontSize: 18,
      color: '#f2994a',
      marginTop: 12, 
      fontWeight: 'bold',
    }
  })

  export default ComponentCardView;