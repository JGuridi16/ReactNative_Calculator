import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MultiplyTable = () => {
    const [number, setNumber] = useState(0);
    const [fills, setFill] = useState([]);
    return (
        <>
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.text}
                    placeholder="Table de:"
                    onChangeText={num => {
                        setNumber(Number(num))
                        setFill(value => {
                            fills.length = 13;
                            return fills;
                        });
                    }}
                    defaultValue={number+""}
                    keyboardType='numeric'
                />
            </View>
            {
                Array.from(number),
                fills.fill(number).map((value, index) =>
                    (<Text>{number} X {index + 1} = {number * (index + 1)}</Text>))
            }

        </>
    )
}

export default MultiplyTable;

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20
    },
    text: {
        height: 40,
        borderColor:
            '#ccc',
        borderRadius: 2,
        borderWidth: 2,
        width: 200,
        marginHorizontal: 10,
        padding: 5,
    },
    button: {
        borderColor: '#ccc',
        backgroundColor: 'red',
        width: 200,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 13
    },
    buttonContainer: {
        paddingHorizontal: 15,
        paddingTop: 20
    },
    totalContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 20
    },
    total: {
        fontSize: 50,
        fontWeight: '500',
        color: 'blue'
    }
});