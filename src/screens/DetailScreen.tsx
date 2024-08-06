import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { fetchData } from '../utils/api';
import { putData } from '../utils/api';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = ({ route }: any) => {
  const { postId } = route.params;
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);


  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`, setPost, setLoading);
  }, [postId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!post) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text>No Data Found</Text>
      </View>
    );
  }

  const handleSubmit = async () => {
    const data = {
      id: postId,
      title,
      body,
      userId: 1,
    };

    try {
      await putData(`https://jsonplaceholder.typicode.com/posts/${postId}`, data);
      showAlert('Success', 'Data Edit successfully');
      navigation.goBack();
    } catch (error) {
      showAlert('Error', 'Failed to Edit data. Please try again.');
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
      <Text style={styles.title}>Detail Data</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={post.title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Body"
        value={post.body}
        onChangeText={setBody}
        multiline
      />
     <Button title="Edit" onPress={handleSubmit} />
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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;
