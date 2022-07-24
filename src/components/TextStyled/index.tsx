import React from 'react';
import {Text} from 'react-native';
import {TextStyledStyles} from './style';

export type TextStyledProps = {
  isBold: boolean;
  customStyle: any;
  children: string;
};

export const TextStyled: React.FC<TextStyledProps> = ({
  children,
  isBold,
  customStyle,
}) => {
  let isBoldStyle = isBold ? TextStyledStyles.boldText : TextStyledStyles.text;
  return <Text style={[isBoldStyle, customStyle]}>{children}</Text>;
};
