import {TouchableOpacity} from 'react-native';
import React from 'react';
import {StyledNavBarContainer} from './styles';
import Svgs from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';

const {Close, ArrowLeft, ArrowLeftP} = Svgs;

interface Props {
  showBackButton?: boolean;
  showCloseButton?: boolean;
  renderLeft?: React.ReactNode;
  renderRight?: React.ReactNode;
  theme?: string;
}

export default function NavBar({
  showBackButton = false,
  showCloseButton = false,
  theme = 'purple',
  ...props
}: Props) {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <StyledNavBarContainer>
      {showBackButton &&
        (theme === 'blue' ? (
          <TouchableOpacity onPress={onGoBack} style={{paddingRight: 10}}>
            <ArrowLeft />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onGoBack} style={{paddingRight: 10}}>
            <ArrowLeftP />
          </TouchableOpacity>
        ))}
      {!showBackButton && showCloseButton && <Close />}
      {props.renderLeft}
      {props.renderRight}
    </StyledNavBarContainer>
  );
}
