/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

const android = Platform.OS === 'android';
export default function CustomKeyboardView({children}) {
  return (
      <KeyboardAvoidingView>
        behavior= {android ? "padding" : "position"}
        style={{ flex: 1 }}

        <ScrollView
            style={{flex: 1}}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            {
                children
            }
        </ScrollView>
      </KeyboardAvoidingView>
  );
}
