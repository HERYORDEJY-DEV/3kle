import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  GetStarted: undefined;
  FamilyPlusDashboard: {id: string; title: string; message: string};
  AggressivePortfolio: {id: number; list: []};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
