import React,{useEffect,useState}from 'react';
import "./App.css";
import {ImQuotesLeft  } from 'react-icons/im';
import { CgQuote } from 'react-icons/cg';
import axios from 'axios';

function App() {

   // 2nd
const[quote,setQuote]=useState([])


// first check the API data
useEffect(()=>{
let data= async () =>{
let result=await axios.get('https://api.quotable.io/random')
   console.log(result);
   // 3rd
setQuote(result.data)
}
data()
},[])

//    QUOTES GENERATOR
let fetchData=async()=>{
   let result=await axios.get('https://api.quotable.io/random')
   setQuote(result.data)
}


  return (
    <div className='App'>
      <div className='container text-center'>
         <ImQuotesLeft/>
      <h1>TRUST THE TIMING OF YOUR LIFE</h1>
         <div className='row'>
            <div className='col'>
            <div className="card border-danger mt-5" >
                  <div className="card-header text-center border-0"> Quotes </div>
                  <div className="card-body text-center">
                        <blockquote className="blockquote mb-0 text-danger fw-bolder">
                                 <p><CgQuote/>{quote.content} <CgQuote/></p>
                                  <footer className="blockquote-footer my-2"><cite title="Source Title">{quote.author}</cite></footer>
                         </blockquote>
                         <button onClick={fetchData} className='btn btn-sm btn-outline-danger '>New Quote</button>
                  </div>
                  </div>
            </div>
         </div>
      </div>
      
    </div>
  )
}

export default App;
