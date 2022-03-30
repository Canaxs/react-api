import React from 'react'

const Card = (props) => {
  const {id,image,name,push} = props;

  const onClickDetails = () => {
    push("/character/"+id);
    window.location.reload();
  }
  
  return (
    <div className='col-4' onClick={() => onClickDetails()}>
      <div className='card2'>
         <img src={image} alt="card" />
        <div className='card2-text'>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  )
}
export default Card;
