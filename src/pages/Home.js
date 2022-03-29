import React, { useState,useEffect } from 'react'
import logo from '../image/logo.png';
import Card from '../components/Card';
import {getBody} from '../api/apiCalls';

const Home = (props) => {

    const[body,setBody] = useState();

    useEffect(() => {
        loadBody(2);
    },[]) 

    const loadBody = async page => {
        await getBody(page).then(res => {
            if(res.data.results) {
                setBody(res.data)
            } 
            else {
                console.log("Error");
            }
        })
    }

  return (
    <div>
        <header>
        <img src={logo} alt="RickAndMort" className='img-fluid' style={{height:"100px",width:"200px"}}/>
        </header>
        <section className='w-100 d-flex justify-content-center pt-5'>
            <div className='w-50 pt-5 row'>
                {body && body.results.map(e => (
                    <Card key={e.id} id={e.id} image={e.image} name={e.name}/>
                ))}
            </div>
        </section>
    </div>
  )
}
export default Home;
