import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

export function CustomBoton({color, text, onPress, textColor, fontSize}) {
    return (
        <TouchableOpacity
            style = {{
                ...styles.button, 
                backgroundColor: color,
            }}
            onPress={onPress}
        >
            <Text 
                style={{
                    ...styles.textBtn,
                    color: textColor,
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export function ImageBoton({url, onPress, text}) {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: '#fff', 
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={onPress}
        >
            <Image 
                style={{
                    width: 15,
                    height: 15,
                }}
                source={{uri: url}}
            />
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 10,
    },
    textBtn: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})