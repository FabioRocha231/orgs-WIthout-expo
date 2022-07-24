import {Image, ImageSourcePropType, View} from 'react-native';
import React from 'react';
import {TextStyled} from '../TextStyled';
import {ItensStyle} from './style';

export default function Item({item: {name, image}}: any) {
  return (
    <View key={name} style={ItensStyle.list}>
      <Image source={image as ImageSourcePropType} style={ItensStyle.image} />
      <TextStyled isBold={false} customStyle={ItensStyle.name}>
        {name}
      </TextStyled>
    </View>
  );
}
