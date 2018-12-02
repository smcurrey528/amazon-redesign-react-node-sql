import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import './Social.css';

const Friends = (props) => {
  return (
    <div className="socialCards">
      <Card className='onesocial'>
        <CardHeader className='namesocial'> <img className='hearts' src='https://i.imgur.com/5O3FvLF.png'/> James Miller <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/7b2e2875-4b9c-488f-b2bd-3c91e4faa739.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $125.00</CardFooter>
      </Card>
      <Card className='onesocial'>
        <CardHeader className='namesocial'> <img className='hearts' src='https://i.imgur.com/urNkRiH.png'/> Kayleigh Bowden <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/050a463a-7d5b-46a4-a1b6-e5857a2c5d44.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $49.00</CardFooter>
      </Card>
      <Card className='onesocial'>
        <CardHeader className='namesocial'> <img className='hearts' src='https://i.imgur.com/eBBh9IU.png'/> Arron Lane <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/046f607c-88ab-4352-a54b-6352619e0015.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $30.00</CardFooter>
      </Card>
      <Card className='onesocial'>
        <CardHeader className='namesocial'> <img className='hearts' src='https://i.imgur.com/zvaxV1m.png'/> Elissa Hyde <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/a819f0fc-cdec-4ff5-8bb3-206151657de0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $60.00</CardFooter>
      </Card>
      <Card className='onesocial'>
        <CardHeader className='namesocial'> <img className='hearts' src='https://i.imgur.com/MbPf1f0.png'/> Tamia Mccormick <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/136ede93-26e7-4008-b0ff-2b4145641a69.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $60.00</CardFooter>
      </Card>
      <Card className='onesocial'>
        <CardHeader className='namesocial'> <img className='hearts' src='https://i.imgur.com/LobWA1K.png'/> Charlotte Humphries <img src='https://i.imgur.com/hVBMHd7.png'/></CardHeader>
        <CardBody>
          <CardTitle><img className='socialImg' src='https://n.nordstrommedia.com/id/1a47fdac-2bd2-4294-b5ed-f92aee3d624c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70'/></CardTitle>
        </CardBody>
        <CardFooter className='footersocial'>Buy this look for $160.00</CardFooter>
      </Card>
      </div>
      )
}

export default Friends;
