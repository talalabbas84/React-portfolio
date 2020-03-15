import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';

import './styles.css';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

export const Slideshow = props => {
  const slideImages = [];
  slideImages.push(
    props.user.map(i => {
      // console.log(i.resolutions.desktop.url);
      return i.resolutions.desktop.url;
    })
  );
  const testo = slideImages[0].map((i, x = 0) => {
    x++;
    return (
      <div key={x} className={'eachSlide'}>
        <div
          className={'test'}
          key={x}
          style={{
            backgroundImage: `url(${i})`
          }}
        >
          <span>Slide {x}</span>
        </div>
      </div>
    );
  });

  return (
    <div className={'slideContainer'}>
      <Slide {...properties}>{testo}</Slide>
    </div>
  );
};
