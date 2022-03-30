import React, { useState,useEffect } from 'react'
import Logo from '../components/Logo';
import Card from '../components/Card';
import {getBody} from '../api/apiCalls';
import { useParams } from 'react-router-dom';

const Home = (props) => {

    const[body,setBody] = useState();
    const {id} = useParams();

    useEffect(() => {
        loadBody(id);
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

    const onClickNext = () => {
        const {push} = props.history;
        const next = parseInt(id) +1;
        push("/home/"+next);
        window.location.reload();
    }
    const onClickPrev = () => {
        const {push} = props.history;
        const prev = parseInt(id) -1;
        push("/home/"+prev);
        window.location.reload();
    }

  return (
    <div>
        <Logo />
        <section className='w-100 d-flex justify-content-center pt-5'>
            <div className='w-50 pt-5 row'>
                {body && body.results.map(e => (
                    <Card key={e.id} id={e.id} image={e.image} name={e.name} push={props.history.push}/>
                ))}
            </div>
        </section>
        <section>
            { body && body.info.prev && (
                <button type="button" className="btn btn-secondary mr-5 mt-2" onClick={() => onClickPrev()}>Previous</button>
            )}
        {body && body.info.next && (
         <button type="button" className="btn btn-success mt-2" onClick={() => onClickNext()}>Next</button>
        )
        }   
        </section>
    </div>
  )
}
export default Home;
