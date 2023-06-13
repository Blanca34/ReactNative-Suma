import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Suma = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const sumarNumeros = () => {
    const suma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(suma.toString());
  };

  return (
    <View>
      <Text>Ingrese el primer número:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 16,
          paddingHorizontal: 8,
        }}
        keyboardType="numeric"
        value={numero1}
        onChangeText={text => setNumero1(text)}
      />
      <Text>Ingrese el segundo número:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 16,
          paddingHorizontal: 8,
        }}
        keyboardType="numeric"
        value={numero2}
        onChangeText={text => setNumero2(text)}
      />
      <Button title="Sumar" onPress={sumarNumeros} />
      {resultado !== '' && <Text>El resultado de la suma es: {resultado}</Text>}
    </View>
  );
};

export default Suma;
