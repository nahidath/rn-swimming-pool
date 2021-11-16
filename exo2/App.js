import React from 'react';
import { Text, View, StyleSheet, Button,  Alert } from 'react-native';

const YourApp = () => {
  return (
      <View style={styles.container}>
          <Button
              title="Button"
              color="cyan"
              onPress={() => Alert.alert('Simple Button pressed')}
          />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default YourApp;