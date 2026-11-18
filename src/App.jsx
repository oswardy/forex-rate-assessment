import { useEffect, useState } from 'react'
import ForexTable from './ForexTable.jsx'
import './App.css'

export default function App() {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState("");
  async function getForexRates(){
    try {
      const response = await fetch(
        "/api/forex"
      );

      if(!response.ok){
        throw new Error("Failed to fetch rates");
        
      }

      const data = await response.json();
      console.log(data);

      setRates(data.rates);
    } catch (error) {
      console.log("Error fetching rates",error);
      setError("Failed to fetch rates");
    }
  }

  useEffect(()=>{
    getForexRates();
  },[]);

  const adjustedRates = rates ? Object.fromEntries(
    Object.entries(rates).map(([currency,value])=>[
      currency,
      value + 10.0002
    ])
  ) : null;

  return (
    <>
      <ForexTable forexRates={rates} adjustedRates={adjustedRates} errorMsg={error}></ForexTable>
    </>
  )
}

