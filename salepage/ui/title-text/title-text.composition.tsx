import React from 'react';
import { TitleText } from './title-text';

export const BasicTitleText = () => {
  return (
    <TitleText
      tagColor={'#1DCAB4'}
      color={'#2A2C2D'}
      fontSize={'2rem'}
      fontWeight={'bold'}
      textTransform={'uppercase'}
    >
      hello world!
    </TitleText>
  );
}
