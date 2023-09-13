import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import RegisterPage from '../screens/register/registerPage';
import LoginPage from '../screens/login/loginPage';
import ProfilePage from '../screens/profile/profilePage';
import { TabComponent } from './tab';
import Calculator from '../screens/calculator/Calculator';
import Climate from '../screens/climate/Climate';
import { useAuth } from '../context/AuthContext';

const { Screen, Navigator } = createNativeStackNavigator();

type StackNavigation = {
  Register: undefined;
  Login: undefined;
  Tab: { id: number } | undefined;
  Profile: { id: number } | undefined;
  Calculator: undefined;
  Climate: undefined;
};

export type StackType = NativeStackNavigationProp<StackNavigation>;
export default function StackRoutes() {
  const { authState } = useAuth();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {authState?.authenticated && (
        <Screen name="Profile" component={ProfilePage} initialParams={{ id: 0 }}></Screen>
      )}
      {authState?.authenticated && (
        <Screen name="Tab" component={TabComponent} initialParams={{ id: 0 }}></Screen>
      )}
      {authState?.authenticated && <Screen name="Calculator" component={Calculator}></Screen>}
      {authState?.authenticated && <Screen name="Climate" component={Climate}></Screen>}
      <Screen name="Register" component={RegisterPage}></Screen>
      <Screen name="Login" component={LoginPage}></Screen>
    </Navigator>
  );
}
