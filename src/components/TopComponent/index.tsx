import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import cestHeaderImage from '../../../assets/topo.png';
import {TextStyled} from '../TextStyled';
import {TopComponentStyles} from './style';

export type TopComponentProps = {
  data: any;
};

export const TopComponent = ({data}: TopComponentProps) => {
  return (
    <>
      <Image
        style={TopComponentStyles.header}
        source={cestHeaderImage as ImageSourcePropType}
      />
      <TextStyled isBold={true} customStyle={TopComponentStyles.title}>
        {data.topComponent.textContent}
      </TextStyled>
    </>
  );
};
