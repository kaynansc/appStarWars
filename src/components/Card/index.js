import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container, ContainerTextCard } from './styles';

const Card = (props) => {
  const {
    name,
    gender,
    height,
    mass
  } = props;

  return (
    <Container>
        <TouchableOpacity activeOpacity={0.6}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: '#FFC602'}}>{name}</Text>

        <ContainerTextCard>
          <Text style={{color: 'white'}}>Gender: {gender}</Text>
          <Text style={{color: 'white'}}>Height: {height}</Text>
          <Text style={{color: 'white'}}>Mass: {mass}</Text>
        </ContainerTextCard>
      </TouchableOpacity>
    </Container>
  );
}

export default Card;