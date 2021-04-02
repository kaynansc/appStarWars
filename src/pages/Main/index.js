import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image, FlatList } from 'react-native';

import GetCharactersApi from '../../services/GetCharactersApi';
import api from '../../services/api';

import Card from '../../components/Card';
import Loader from '../../components/Loader';

import { Container, Logo, Header } from './styles';

const App = () => {
  const [countCharacters, setCountCharacters] = useState(0);
  const [characters, setCharacters] = useState();
  const [page, setPage] = useState(1);
  const [isLoadingNextPage, setLoadingNextPage] = useState(false);

  // Exibe um modal após 45 segundos de uso do aplicativo
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert('ola');
  //   }, 45000)
  // },[])

  useEffect(() => {
    const loadCharacters = async () => {
      const { count, characters } = await GetCharactersApi(page);

      // Pego a quantidade de Personagens, para não ficar fazendo requisição após carregar todos
      if (countCharacters == 0) {
        setCountCharacters(count);
      }

      if (page == 1) {
        setCharacters(characters);
      }
      else {
        setCharacters(prevData => [...prevData, ...characters]);
      }
      
      setLoadingNextPage(false);
    }

    loadCharacters();
  }, [page])
  
  function handleNextPage() {
    // Só posso executar, caso ainda não carreguei todas as pages
    if (characters.length < countCharacters) {
      setLoadingNextPage(true);
      setPage(prevData => prevData + 1);
    }
  };

  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C1C1C'}}>
      <Container>
        <Header>
          <Logo source={require('../../assets/star-wars-logo.png')}/>
        </Header>

        {!characters ? <Loader/> :
          <FlatList
            data={characters}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Card
                name={item.name}
                gender={item.gender}
                height={item.height}
                mass={item.mass}
              />
            )}
            style={{height: '90%'}}
            onEndReached={handleNextPage}
            initialNumToRender={10}
            onEndReachedThreshold={0.1}
          />
        }

        {isLoadingNextPage && <Loader/>}
      </Container>
    </SafeAreaView>

  );
}

export default App;
