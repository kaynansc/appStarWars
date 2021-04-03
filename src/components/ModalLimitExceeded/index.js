import React, { useState } from 'react';
import { Modal, Image, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { ModalBackground, ModalContainer, ModalText, ButtonPay, ButtonLater } from './styles';


function ModalLimitExceeded({ visible }) {
  const [hideModal, setHideModal] = useState(false);

  async function handlePaymentApp() {
    
    const saveLocalStorageUserPaid = async () => {
      try {
        await AsyncStorage.setItem('@userpaid', 'true');
      } catch {
        alert('Houve um erro ao realizar o pagamento')
      }
    }

    await saveLocalStorageUserPaid();
    setHideModal(true);
    alert('Parabéns, agora você tem acesso ao aplicativo por tempo ilimitado!');
  };

  function handleLater() {
    
  }

  return (
    <Modal transparent={true} visible={ hideModal == true ? false : visible}>
        <ModalBackground>
          <ModalContainer>
            <ModalText>
              <Image source={require('../../assets/time.png')} style={{ margin: 10}}/>
              <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: 10, color: '#FC6249'}}>Oops!</Text>

              <View style={{marginTop: 10}}>
                <Text style={{fontSize: 18, fontWeight: '600', marginBottom: 10}}>Excedeu o seu limite de uso gratuito... </Text>
                <Text style={{fontSize: 14, marginBottom: 10}}>Para continuar utilizando é necessário efetuar o pagamento:</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TouchableOpacity activeOpacity={0.6} onPress={handlePaymentApp}>
                    <ButtonPay>
                      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Pagar</Text>
                    </ButtonPay>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.6} onPress={handleLater}>
                    <ButtonLater>
                      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Mais tarde</Text>
                    </ButtonLater>
                  </TouchableOpacity>
                </View>
              </View>
            </ModalText>
          </ModalContainer>
        </ModalBackground>
      </Modal>
  );
}

export default ModalLimitExceeded;