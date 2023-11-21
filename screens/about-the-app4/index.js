import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {// Handle submit logic here
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.appName}>{"Artiste"}</Text>
      <Text style={styles.registration}>Registration</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} data={[1, 2, 3]} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff'
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24
  },
  registration: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16
  },
  buttonContainer: {
    marginTop: 16
  }
});
export default SignupScreen;