import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductContextProvider } from './components/context/Product.context';
import { AppNavigation } from './components/navigations';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { Provider } from 'react-redux';
import store  from './redux/store';

export default function App() {

  const [latoFont] = useLato({
    Lato_400Regular
  });

  if (!latoFont) {
    return null
  }

  return (
    <Provider store={store}>
        <ProductContextProvider>
          <AppNavigation />
        </ProductContextProvider>
    </Provider>


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
