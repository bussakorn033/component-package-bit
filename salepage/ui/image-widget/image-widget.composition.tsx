import React from 'react';
import { ImageWidget } from './image-widget';

export const BasicImageWidget = () => {
  return (
    <ImageWidget
      link={'#'}
      src={'https://picsum.photos/0/0'}
      alt={'ImageWidget'}
      objectFit={'contain'}
    />
  );
}
