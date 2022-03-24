import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductContextProvider } from './components/context/Product.context';
import { FavoriteContextProvider } from './components/context/Favorite.context';
import { AppNavigation } from './components/navigations';
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'

export default function App() {

  const [latoFont] = useLato({
    Lato_400Regular
  });

  if(!latoFont){
    return null
  }

  return (
    <FavoriteContextProvider>
      <ProductContextProvider>
        <AppNavigation />
      </ProductContextProvider>
    </FavoriteContextProvider>

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
