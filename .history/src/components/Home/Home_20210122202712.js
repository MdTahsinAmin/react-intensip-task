import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Countries from './Countries';
const Home = () => {
    const [countries,setCountries] = useState([]);
    const [filterCountries,setFilterCountries] = useState([]);
    
    useEffect(() =>{
         fetch(`https://restcountries.eu/rest/v2/all`)
         .then(response => response.json())
         .then(data => setCountries(data))
      },[]);



    return (
        <Container className='py-5'>

           <Row>
                {
                    countries.map(
                        (country,index)=> <Countries key={index} country={country}/> 
                        )
                }
           </Row>
        </Container>
    );
};

export default Home;