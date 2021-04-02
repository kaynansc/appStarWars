import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import GetCharactersApi from '../../services/GetCharactersApi';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import ModalLimitExceeded from '../../pages/ModalLimitExceeded';

import { Container } from './styles';

const App = () => {
  const [countCharacters, setCountCharacters] = useState(0);
  const [characters, setCharacters] = useState();
  const [page, setPage] = useState(1);
  const [isLoadingNextPage, setLoadingNextPage] = useState(false);
  const [isLimitExceeded, setIsLimitExceeded] = useState(false);

  //Exibe um modal após 45 segundos de uso do aplicativo
  useEffect(() => {
    setTimeout(() => {
      setIsLimitExceeded(true);
    }, 45000)
  },[])

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
        <Header/>

        <ModalLimitExceeded visible={isLimitExceeded}/>

        {!characters ? <Loader/> :
          <FlatList
            data={characters}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Card
                character={item}
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
