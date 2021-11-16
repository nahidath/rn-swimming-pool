import React, {useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const YourApp = () => {
  const [count, setCount] = useState(0);
  return (
      <View style={styles.container}>
          <Text style={styles.textstyle}>
              {count}
          </Text>
        <Button
            title="Button"
            color="cyan"
            onPress={() => {setCount(count + 1)}}
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
  },
    textstyle:{
      fontSize: 50
    }
});
export default YourApp;