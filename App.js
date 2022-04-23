import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store'; 

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
          screenOptions={{ 
            headerStyle: { backgroundColor: '#351401'},
            headerTintColor: 'white',
            // contentStyle -> sceneContainerStyle for drawer navigator!
            sceneContainerStyle: { backgroundColor: '#3f2f25'},
            drawerContentStyle: { backgroundColor: '#351401'},
            drawerInactiveTintColor: 'white',
            drawerActiveTintColor: '#351401',
            drawerActiveBackgroundColor: '#e4baa1'
          }}
    >
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen} 
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size} />
        }} 
      />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} 
        options={{
          title: 'My Favorites',
          drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size} />
        }} 
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      {/* <FavoritesContextProvider> // this was for react context api approach */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Drawer" 
            screenOptions={{
              headerStyle: { backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25'},
            }}
          >
            <Stack.Screen 
              name="MealDetail"
              component={MealDetailScreen}
              options={{title: 'About the Meal'}}
              // if we don't need direct interaction for the screen, we can do like this:
              // options={{
              //   headerRight: () => {
              //     return <Button title='Tap me!'  />
              //   }
              // }}
            />
            <Stack.Screen 
              name="Drawer" 
              component={DrawerNavigator} 
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name="MealsOverview" 
              component={MealsOverviewScreen} 
              // options prop can take function as well
              // react nav provides two properties
              // this function will be executed whenever the screen becomes active 
              // options={({route, navigation})=> {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  }
  
});
