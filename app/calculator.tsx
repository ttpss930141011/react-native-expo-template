import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

type CardsComponentsProps = {};

const Cards: React.FunctionComponent<CardsComponentsProps> = () => {
return (
  <>
    <ScrollView>
      <View className='flex-1'>
        <Card>
        
            <Card.FeaturedTitle>
                <Text className='mb-2'>Card with content</Text>
                <Text>Card with content</Text>
            </Card.FeaturedTitle>
        </Card>
      
      </View>
    </ScrollView>
  </>
);
};



export default Cards;