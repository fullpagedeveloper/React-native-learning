import React, { Component } from "react";
import {Image, Text, View} from 'react-native';
import macbook from './macbook.jpg';

class MateriFlexBox extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', backgroundColor: '#f4f4', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{backgroundColor: '#fec', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#7ff', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#f99', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#5f6', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#F43', width: 50, height: 50}}></View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Text>Branda</Text>
                    <Text>Video</Text>
                    <Text>Playlis</Text>
                    <Text>Komunitas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={macbook} style={{height: 50, width: 50, borderRadius: 50, marginRight: 14}}/>
                    <View>
                        <Text>Maulana</Text>
                        <Text>2jt</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default MateriFlexBox;