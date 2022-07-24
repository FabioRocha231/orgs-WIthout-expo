import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FarmPresentation} from '../FarmPresentation';
import {GenericButton} from '../GenericButton';
import {TextStyled} from '../TextStyled';
import {FarmCestStyles} from './style';

export type FarmCestProps = {
  data: any;
};

export const FarmCest: React.FC<FarmCestProps> = ({data}) => {
  return (
    <View style={FarmCestStyles.cest}>
      <TextStyled isBold={true} customStyle={FarmCestStyles.cestName}>
        {data.farmCest.cestName}
      </TextStyled>

      <FarmPresentation farmLogo={data.farmCest.farmLogo}>
        {data.farmCest.farmName}
      </FarmPresentation>

      <TextStyled isBold={false} customStyle={FarmCestStyles.description}>
        {data.farmCest.farmDescription}
      </TextStyled>

      <GenericButton
        buttonStyle={FarmCestButton.cestButton}
        onPress={() => console.log('abestado')}>
        {data.farmCest.button}
      </GenericButton>
    </View>
  );
};

export const FarmCestButton = StyleSheet.create({
  cestButton: {
    marginTop: 16,
  },
});
