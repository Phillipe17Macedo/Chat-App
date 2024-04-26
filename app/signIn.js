/* eslint-disable prettier/prettier */
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Loading from '../components/Loading';

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert('Entrar', 'Preencher  todos os campos!');
    }

    //Processo de Login
  };
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }} className="flex-1  gap-12">
        {/* SignIn Image */}
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require('../assets/images/login-image.png')}
          />
        </View>
      </View>

      <View className="gap-10">
        <Text
          style={{ fontSize: hp(4) }}
          className="font-bold tracking-wider text-center text-neutral-800">
          Entrar
        </Text>
        {/* Inputs*/}
        <View className="gap-4">
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
            <Octicons name="mail" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={(value) => (emailRef.current = value)}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Endereço de Email"
              placeholderTextColor="gray"
            />
          </View>
          <View className="gap-3">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
              <Octicons name="lock" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (passwordRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Senha"
                secureTextEntry
                placeholderTextColor="gray"
              />
            </View>
            <Text
              style={{ fontSize: hp(1.8) }}
              className="font-semibold text-right text-neutral-500">
              Esqueceu a senha?
            </Text>
          </View>

          {/* Entrar */}

          <View>
            {loading ? (
              <View className="flex-row justify-center">
                <Loading size={hp(8)} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={handleLogin}
                style={{ height: hp(6.5), backgroundColor: '#543FB5' }}
                className="bg-indigo-500 rounded-xl justify-center items-center">
                <Text style={{ fontSize: hp(2.7) }} className="text-white font-bold tracking-wider">
                  Entrar
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Cadastrar */}

          <View className="flex-row justify-center">
            <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-neutral-500">
              Não tem uma conta?
            </Text>
            <Pressable onPress={() => router.push('signUp')}>
              <Text style={{ fontSize: hp(1.8) }} className="font-bold text-indigo-500">
                Cadastrar-se
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
