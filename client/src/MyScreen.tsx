import { useQuery } from '@apollo/client';
import { memo } from 'react';
import { View } from 'react-native';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const MyScreen = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (!loading) {
    console.log(data);
  }

  return <View />;
};

export default memo(MyScreen);
