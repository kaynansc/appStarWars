import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Header from '../../components/Header';
import { Container, ContainerInfos, ContainerTextInfo, TextInfoLabel, TextInfoResult } from './styles';

function Character({ route }) {
  const { character } = route.params;
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C1C1C'}}>
      <Container>
        <Header/>

        <ContainerInfos>
            <ContainerTextInfo>
              <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#FFC602'}}>{character.name}</Text>

              <View style={{ flexDirection: 'row' }}>
                <TextInfoLabel>Gender: </TextInfoLabel>
                <TextInfoResult>{character.gender}</TextInfoResult>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <TextInfoLabel>Height: </TextInfoLabel>
                <TextInfoResult>{character.height}</TextInfoResult>
              </View>
              
              <View style={{ flexDirection: 'row' }}>
                <TextInfoLabel>Mass: </TextInfoLabel>
                <TextInfoResult>{character.mass}</TextInfoResult>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <TextInfoLabel>Hair Color: </TextInfoLabel>
                <TextInfoResult>{character.hair_color}</TextInfoResult>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <TextInfoLabel>Skin Color: </TextInfoLabel>
                <TextInfoResult>{character.skin_color}</TextInfoResult>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <TextInfoLabel>Eye Color: </TextInfoLabel>
                <TextInfoResult>{character.eye_color}</TextInfoResult>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <TextInfoLabel>Birthyear: </TextInfoLabel>
                <TextInfoResult>{character.birth_year}</TextInfoResult>
              </View>

            </ContainerTextInfo>
        </ContainerInfos>
      </Container>
    </SafeAreaView>
  );
}

export default Character;