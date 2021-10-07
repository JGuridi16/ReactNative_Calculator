import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native';

const Converter = () => {

  const [ number, setNumber ] = useState('');
  const [ total, setTotal ] = useState('');

  const numberToLetters = (n:any) =>{
	let unit_nal = ['','Uno','Dos','Tres','Cuatro','Cinco','Seis','Siete','Ocho','Nueve','Diez','Once','Doce','Trece','Catorce','Quince','Dieciseis','Diecisiete','Dieciocho','Diecinueve'];
	let dec_nal = ['','Diez','Veinte','Treinta','Cuarenta','Cincuenta','Sesenta ','Setenta ','Ochenta','Noventa'];
	let cent_nal = ['','Ciento','Dociento','Treciento','Cuatrociento','Quiniento','Seisciento','Seteciento','Ochociento','Noveciento'];
	let number = parseInt(n+'');
	let answer = '';
	let cen = parseInt(number/100+"");
	let dec = number % 100;
	let unis = dec%10;
	let ddec = parseInt(dec/10+"");

	if(number > 1000) return 'El valor pasa de mil';
	if(number < 1000) {
		if (number == 100) return 'Cien';
		if (number > 100) answer = ' ' + cent_nal[cen] + ' ' + numberToLetters(dec);
		if (number < 100)
		{
			if (dec < 20) answer = ' ' + unit_nal[dec];
			if (dec >= 20) answer = ' ' + dec_nal[ddec] + ' ' + numberToLetters(unis); 
			if (dec == 0) answer = ' ' + unit_nal[dec];
			if (dec > 20 && unis > 0) answer = ' ' + dec_nal[ddec] + ' Y ' + unit_nal[unis];
		}
    if (number === 0) return "Cero"
	}else{
			answer = 'Mil';
	}

	return answer ;
}

  return (
    <>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.text}
          placeholder="Digite el texto que sera convertido"
          onChangeText={num => {
            setNumber(num)
          }}
          defaultValue={number}
          keyboardType = 'numeric'
        />
        <Pressable onPress={()=>setTotal(numberToLetters(number))} style={styles.button}>
          <Text style={{color: '#fff'}}>Convertir</Text>
        </Pressable>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>{total.length && total}</Text>
      </View>
    </>
  )
}

export default Converter;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  text:{
    height: 40, 
    borderColor: 
    '#ccc', 
    borderRadius: 2, 
    borderWidth: 2,
    width: 250,
    padding: 5,
  },
  totalContainer:{
    display: 'flex',
    alignItems: 'center',
    paddingTop: 50
  },
  total:{
    fontSize: 30,
    fontWeight: '500',
    color: 'blue',
    textAlign: 'center'
  },
  button:{
    borderColor: '#ccc',
    backgroundColor: 'green',
    width: 85,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 13
  }
});