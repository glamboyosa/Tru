import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Register: undefined;
  Stack: undefined;
  Home: undefined;
};
// this is for type checking screens
export interface NavigationProp<T extends keyof RootStackParamList> {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
}
