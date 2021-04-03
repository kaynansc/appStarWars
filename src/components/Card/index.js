import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import { Container, ContainerTextCard } from './styles';

const Card = (props) => {
  const {
    character
  } = props;

  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('Character', { character })
  }

  return (
    <Container>
        <TouchableOpacity activeOpacity={0.6} onPress={handlePress}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: '#FFC602'}}>{character.name}</Text>

        <ContainerTextCard>
          <Text style={{color: 'white'}}>Gender: {character.gender}</Text>
          <Text style={{color: 'white'}}>Height: {character.height}</Text>
          <Text style={{color: 'white'}}>Mass: {character.mass}</Text>
        </ContainerTextCard>
      </TouchableOpacity>
    </Container>
  );
}

export default Card;