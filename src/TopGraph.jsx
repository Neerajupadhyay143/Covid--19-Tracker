import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';


function TopGraph() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120').then((request)=>{
            request.json().then((result)=>{
                console.log(result)
            })
        })
    })
  return (
    <div>
  <line/>
      
    </div>
  )
}

export default TopGraph;
