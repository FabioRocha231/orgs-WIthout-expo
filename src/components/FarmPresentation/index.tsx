import {View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {FarmPresentationStyles} from './style';
import {TextStyled} from '../TextStyled';

export type FarmPresentationProps = {
  children: string;
  farmLogo: string;
};

export const FarmPresentation: React.FC<FarmPresentationProps> = ({
  children,
  farmLogo,
}) => {
  return (
    <View style={FarmPresentationStyles.farm}>
      <Image
        style={FarmPresentationStyles.farmLogo}
        source={farmLogo as ImageSourcePropType}
      />
      <TextStyled isBold={false} customStyle={FarmPresentationStyles.farmName}>
        {children}
      </TextStyled>
    </View>
  );
};
