import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import chart from './chart.png';

export default function PositionReactNative() {
    return (
        <View style={styles.viewPadding}>
            <View style={styles.chartWrapper}>
                <Image source={chart} style={styles.iconChart}/>
                <Text style={styles.notif}>100</Text>
            </View>
            <Text style={styles.textStyle}>Kantong belanja</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewPadding: {
        padding: 20
    },

    chartWrapper: {
        height: 93,
        width: 93,
        borderRadius: 93/2,
        borderWidth: 1,
        borderColor: '#4398d1',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    
    iconChart: {
        height: 50,
        width: 50
    },

    textStyle: {
        fontSize: 12,
        color: '#e777',
        fontWeight: '700',
        marginTop: 12
    },

    notif: {
        fontSize: 12,
        color: '#FFF',
        backgroundColor: '#6fcf97',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
    }

})
