import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import RegisterPage from '../screens/register/registerPage';
import LoginPage from '../screens/login/loginPage';
import ProfilePage from '../screens/profile/profilePage';
import { TabComponent } from './tab';

const { Screen, Navigator } = createNativeStackNavigator();

type StackNavigation = {
  Register: undefined;
  Login: undefined;
  Home: { id: number } | undefined;
  Profile: { id: number } | undefined;
};

export type StackType = NativeStackNavigationProp<StackNavigation>;
export default function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Register" component={RegisterPage}></Screen>
      <Screen name="Login" component={LoginPage}></Screen>
      <Screen name="Profile" component={ProfilePage} initialParams={{ id: 0 }}></Screen>
      <Screen name="Home" component={TabComponent} initialParams={{ id: 0 }}></Screen>
    </Navigator>
  );
}
