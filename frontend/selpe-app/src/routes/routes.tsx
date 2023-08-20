import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stackRoutes';

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes></StackRoutes>
    </NavigationContainer>
  );
}
