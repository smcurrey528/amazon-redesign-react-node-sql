import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import './Social.css';

const Social = (props) => {
  return (
    <div className="socialCards">
      <Card className='onesocial'>
        <CardHeader className='headsocial'> <img className='hearts' src='https://i.imgur.com/X35UKsb.png'/> Posted on Nov. 30 2018 <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/3b92c5b8-8e10-432d-b31c-60799b17c6e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $125.00</CardFooter>
      </Card>
      <Card className='onesocial'>
        <CardHeader className='headsocial'> <img className='hearts' src='https://i.imgur.com/X35UKsb.png'/> Posted on Nov. 21 2018 <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/dba349c3-fb2c-4b99-8869-64be45d26c16.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $49.00</CardFooter>
      </Card>
      <Card className='onesocial'>
        <CardHeader className='headsocial'> <img className='hearts' src='https://i.imgur.com/X35UKsb.png'/> Posted on Nov. 19 2018 <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/ea58bf10-48aa-46bd-bca3-4733f4a3e7da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $30.00</CardFooter>
      </Card>
      <Card className='onesocial'>
        <CardHeader className='headsocial'> <img className='hearts' src='https://i.imgur.com/X35UKsb.png'/> Posted on Nov. 18 2018 <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/e78e808f-e493-41af-989d-963f6a7387bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $60.00</CardFooter>
      </Card>
      <Card className='onesocial'>
        <CardHeader className='headsocial'> <img className='hearts' src='https://i.imgur.com/X35UKsb.png'/> Posted on Nov. 9 2018 <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/a103a797-bcfc-453e-9e3c-2beba5de6708.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $60.00</CardFooter>
      </Card>
      <Card className='onesocial'>
        <CardHeader className='headsocial'> <img className='hearts' src='https://i.imgur.com/X35UKsb.png'/> Posted on Nov. 2 2018 <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/b54e8ca9-79de-44f1-879b-3840926cbd2e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $160.00</CardFooter>
      </Card>
      </div>
      )
}

export default Social;





