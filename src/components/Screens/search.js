import React, {useState,useEffect} from 'react';
import './search.css';
import Header from '../Header/header'
import { FilteringTable } from '../Table/table'
import {FaAngleDoubleLeft } from 'react-icons/fa';
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


export default function Search() {

  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(()=>{
      setLoading(false);
    },1000)
  },[]);

  const history = useHistory();


  function goBack() {
    
    history.push('./home');
  };

 return (
   <div>

    {
    loading 
    
    ? 
    (
      <div className="loading-screen">
        <ClipLoader  size={150} color={'#fff'} loading={loading} />
      </div>
    )
    :
    (
      <>     
    <Header/>   
    <button className="back-button" onClick={goBack}>
     <FaAngleDoubleLeft size={25}/>
    </button> 
    <FilteringTable/>
    </>
    )
    
    }


   
   </div>
 );
}