import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/PNG/vertical-positiva.png'

import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SingIn() {
  return (
    <Background>
      <Container>
        <Image source={logo}/>

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-adress"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => {}}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};
