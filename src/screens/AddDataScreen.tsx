import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { postData } from '../utils/api';
import { useNavigation } from '@react-navigation/native';

const AddDataScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    const data = {
      title,
      body,
      userId: 1,
    };

    try {
      await postData('https://jsonplaceholder.typicode.com/posts', data);
      showAlert('Success', 'Data submitted successfully');
      navigation.goBack();
    } catch (error) {
      showAlert('Error', 'Failed to submit data. Please try again.');
      console.error('Error submitting data:', error);
    }
  };

  const showAlert = (title: string, message: string) => {
    Alert.alert(
      title,
      message,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Data</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default AddDataScreen;
