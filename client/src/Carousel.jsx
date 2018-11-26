import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Carousel.css';
const items = [
  {
    src: 'https://i.imgur.com/YlFBZwW.png',
  },
  {
    src: 'https://cdn.vox-cdn.com/thumbor/do8aLWD6VPcMRL35RRmk-EvISUM=/0x0:1439x602/1200x800/filters:focal(512x211:742x441)/cdn.vox-cdn.com/uploads/chorus_image/image/62335613/amazonalexa_header_logo.df1ba163.0.jpg',
  },
  {
    src: 'https://techforluddites.com/wp-content/uploads/amazon-fire-tv-stick-fire-tablet-echo-dot.png',

  }
];

const Carousel = () =>
<div className="carousel">
<UncontrolledCarousel items={items} />
</div>
;

export default Carousel;
