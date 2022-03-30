import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {getDetails} from '../api/apiCalls';
import Logo from '../components/Logo';

 const Details = (props) => {
    const[body,setBody] = useState();
     const {id} = useParams();

     useEffect(() => {
      loadBody(id);
     },[])

     const loadBody = async id => {
      await getDetails(id).then(res => {
          if(res.data) {
              setBody(res.data)
          } 
          else {
              console.log("Error");
          }
      })
  }
  return (
    <div>
        <Logo />
      
        {body && (
          <div className='d-flex justify-content-center'>
          <div className="card mb-3 w-50">
            <div className='d-flex justify-content-center'>
          <img className="card-img-top" src={body.image} alt="Card image cap" style={{width:"300px",height: "300px"}}/>
          </div>
          <div className="card-body">
            <h5 className="card-title">{body.name}</h5>
            <p className='card-text'>Gender: {body.gender}</p>
            <p className="card-text">Status: {body.status}</p>
            <p className="card-text">Species: {body.species} </p>
          </div>
        </div>
        </div>
        )}
    </div>
  )
}

export default Details;
