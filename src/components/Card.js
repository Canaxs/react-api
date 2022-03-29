import React from 'react'

const Card= (props) => {
  const {id,key,image,name} = props;
  return (
    <div className='col-4'>
      <div className='card'>
        <img src={image} alt="card" />
        <div className='card-text'>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  )
}
export default Card;
