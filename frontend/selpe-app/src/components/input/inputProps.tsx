import { TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';
export interface InputProps {
  placeholder: string;
  createfunction(e: NativeSyntheticEvent<TextInputChangeEventData>): void;
  security: boolean;
}
