import React from 'react';
import "./styles/detailpage.css";
import CardItem from './cardItem';

// import db from
export default function DetailPage() {
  return (
    <div className='mypage'>
      <h1>NFT market</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-red.jpg'
              text='I could be red '
              label='Colors'
              path=''
            />
            <CardItem
              src='images/img-yellow.jpg'
              text='I could be yellow'
              label='Colors'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-blue.jpg'
              text='I could be blue or I could be purple'
              label='Colors'
              path=''
            />
            <CardItem
              src='images/img-black.jpg'
              text='I could be green or pink or black or white'
              label='Colors'
              path=''
            />
            <CardItem
              src='images/img-color.jpg'
              text='I could be every color you like'
              label='Colors'
              path=''
            />
          </ul>
        </div>
      </div>
    </div> 
  );
}

