import {TouchableOpacity} from 'react-native';
import React from 'react';
import {TextStyled} from '../TextStyled';
import {ButtonStyles} from './style';

export type ButtonProps = {
  children: string;
  onPress?(): void;
  textCustomStyle?: any;
  buttonStyle?: any;
};

export const GenericButton: React.FC<ButtonProps> = ({
  children,
  buttonStyle,
  onPress,
  textCustomStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[ButtonStyles.button, buttonStyle]}>
      <TextStyled
        isBold={true}
        customStyle={[ButtonStyles.buttonText, textCustomStyle]}>
        {children}
      </TextStyled>
    </TouchableOpacity>
  );
};
