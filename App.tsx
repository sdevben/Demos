import { registerRootComponent } from 'expo'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ShareExample from './components/ShareComponent';
import ShareImageExample from './components/ShareImageComponent';
import SharePdfExample from './components/SharePdfComponent';

function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.header}>Text Sharing Native</Text>
        <View style={styles.component}>
          {<ShareExample></ShareExample>}
        </View>
      </View>

      <View style={styles.group}>
        <Text style={styles.header}>Image Sharing react-native-share</Text>
        <View style={styles.component}>
          {<ShareImageExample></ShareImageExample>}
        </View>
      </View>

      <View style={styles.group}>
        <Text style={styles.header}>PDF Sharing react-native-share</Text>
        <View style={styles.component}>
          {<SharePdfExample></SharePdfExample>}
        </View>
      </View>
      <StatusBar style='auto'></StatusBar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  group: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  component: {
    marginBottom: 10,
  },
});


registerRootComponent(App);
