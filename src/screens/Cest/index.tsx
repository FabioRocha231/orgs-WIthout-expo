import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {FarmCest} from '../../components/FarmCest';
import {FarmCestStyles} from '../../components/FarmCest/style';
import Item from '../../components/ListItem';
import {TextStyled} from '../../components/TextStyled';
import {TopComponent} from '../../components/TopComponent';

export type CestProps = {
  data: any;
};

export const Cest: React.FC<CestProps> = ({data}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={data.itens.list}
        renderItem={Item}
        keyExtractor={(item: any) => item.name}
        ListHeaderComponent={() => {
          return (
            <>
              <TopComponent data={data} />
              <FarmCest data={data} />
              <TextStyled isBold={true} customStyle={FarmCestStyles.title}>
                {data.itens.title}
              </TextStyled>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};
