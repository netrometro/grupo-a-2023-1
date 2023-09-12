import { useNavigationState } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';

export function useScreenGuard(screenName: string) {
  const [reloadFunc, setReloadFunc] = useState<boolean>(false);
  const navigationState = useNavigationState((state) => state);

  async function handleAuth() {
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Desbloquei para acessar as funcionalidades'
    });

    if (!auth.success) {
      handleAuth();
    }
  }

  useEffect(() => {
    if (navigationState.routes) {
      const currentScreen = navigationState.routes[navigationState.index];
      if (currentScreen.name === screenName) {
        handleAuth();
      }
    }
  }, []);
}
