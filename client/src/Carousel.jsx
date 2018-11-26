import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Carousel.css';
const items = [
  {
    src: 'https://i.imgur.com/YlFBZwW.png',
  },
  {
    src: 'https://www.geek.com/wp-content/uploads/2016/03/amazonecho-625x350.jpg',
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
