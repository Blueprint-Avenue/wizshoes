import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductContextProvider } from './components/context/Product.context';
import { AppNavigation } from './components/navigations';

export default function App() {
  return (
    <ProductContextProvider>
    <AppNavigation />
    </ProductContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
