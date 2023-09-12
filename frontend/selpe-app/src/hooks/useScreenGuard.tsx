import { useNavigationState } from '@react-navigation/native';
import { useEffect, useState } from 'react';

export function useScreenGuard(screenName: string) {
  const [sessionTime, setSessionTime] = useState(0);
  const navigationState = useNavigationState((state) => state);

  useEffect(() => {
    if (sessionTime < 10) {
      const timer = setTimeout(() => {
        setSessionTime((prevState) => prevState + 1);
      }, 1000);
      console.log(sessionTime);

      return () => clearTimeout(timer);
    } else {
      if (navigationState.routes) {
        const currentScreen = navigationState.routes[navigationState.index];

        if (currentScreen.name === screenName) {
          console.log('bloquear');
        }
      }
    }
  }, [sessionTime]);
}
