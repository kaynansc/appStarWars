import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GetCharactersApi from '../../services/GetCharactersApi';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import ModalLimitExceeded from '../../components/ModalLimitExceeded';

import { Container } from './styles';

const App = () => {
  const [countCharacters, setCountCharacters] = useState(0);
  const [characters, setCharacters] = useState();
  const [page, setPage] = useState(1);
  const [isLoadingNextPage, setLoadingNextPage] = useState(false);
  const [isLimitExceeded, setIsLimitExceeded] = useState(false);

  
  useEffect(() => {
    const verifyInLocalStorageIfUserPaid = async () => {
      const isPaid = await AsyncStorage.getItem('@userpaid');

      if (isPaid) {
        return;
      }
      
      if (isPaid == false) {
        setIsLimitExceeded(true);
        return;
      }

      // Caso o usuário esteja entrando a primeira vez, será exibido um modal após 45 segundos de uso do aplicativo
      setTimeout(() => {
        setIsLimitExceeded(true);
        
        // Já atribuo como falso o pagamento;
        const saveLocalStorageUserPaid = async () => {
          await AsyncStorage.setItem('@userpaid', 'false');
        }

        saveLocalStorageUserPaid();
      }, 45000)
    }

    verifyInLocalStorageIfUserPaid();
  }, [])

  useEffect(() => {
    try {
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
    }
    catch {
      alert('Houve um erro ao buscar os personagens!')
    }
  }, [page])

  function handleNextPage() {
    // Só posso executar, caso ainda não carreguei todas as pages
    if (characters.length < countCharacters) {
      setLoadingNextPage(true);
      setPage(prevData => prevData + 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1C1C' }}>
      <Container>
        <Header />

        <ModalLimitExceeded visible={isLimitExceeded} />

        {!characters ? <Loader /> :
          <FlatList
            data={characters}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Card
                character={item}
              />
            )}
            style={{ height: '90%' }}
            onEndReached={handleNextPage}
            initialNumToRender={10}
            onEndReachedThreshold={0.1}
          />
        }

        {isLoadingNextPage && <Loader />}
      </Container>
    </SafeAreaView>

  );
}

export default App;
