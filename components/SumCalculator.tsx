import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

const SumCalculator = () => {
  const [ numberOne, setNumberOne ] = useState(0);
  const [ numberTwo, setNumberTwo ] = useState(0);
  const [ total, setTotal ] = useState(0);

  return (
    <>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.text}
          placeholder="Digite un numero"
          onChangeText={num => setNumberOne(Number(num))}
          defaultValue={numberOne+""}
          keyboardType = 'numeric'
        />
        <Text style={{paddingTop: 10}}>+</Text>
        <TextInput
          style={styles.text}
          placeholder="Digite un numero"
          onChangeText={num => setNumberTwo(Number(num))}
          defaultValue={numberTwo+""}
          keyboardType = 'numeric'
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={()=>setTotal(+numberOne + +numberTwo)} style={styles.button}>
          <Text style={{color: '#fff'}}>Sumar Numeros</Text>
        </Pressable>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>{total ? total : ''}</Text>
      </View>
    </>
  )
}

export default SumCalculator;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  },
  text:{
    height: 40, 
    borderColor: 
    '#ccc', 
    borderRadius: 2, 
    borderWidth: 2,
    width: 150,
    marginHorizontal: 10,
    padding: 5,
  },
  button:{
    borderColor: '#ccc',
    backgroundColor: 'green',
    width: 330,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 13
  },
  buttonContainer: {
    paddingHorizontal: 15,
    paddingTop: 20
  },
  totalContainer:{
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20
  },
  total:{
    fontSize: 50,
    fontWeight: '500',
    color: 'blue'
  }
});