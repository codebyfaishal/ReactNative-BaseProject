// src/screens/DataScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchData } from '../utils/api';

const DataScreen = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/posts', setData, setLoading);
  }, []);

  const handleItemClick = (item: any) => {
    navigation.navigate('Detail', { postId: item.id }); // Navigate to DetailScreen with postId as parameter
  };

  const handleAddPress = () => {
    navigation.navigate('AddData'); // Navigate to AddDataScreen
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text>No Data Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleItemClick(item)}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.fab} onPress={handleAddPress}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    fontSize: 30,
    color: 'white',
  },
});

export default DataScreen;
