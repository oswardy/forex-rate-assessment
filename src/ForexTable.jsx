export default function ForexTable({forexRates,adjustedRates, errorMsg}){
    if(errorMsg){
        return(
            <>
                <h2>Forex Rates Table</h2>
                <p>{errorMsg}</p>
            </>
        )
    }

    if(!forexRates || !adjustedRates){
        return(
            <>
                <h2>Forex Rates Table</h2>
                <p>Loading Forex rates table</p>
            </>
        )     
    }
    function checkEvenNumber(value){
        return Number.isInteger(value) && value % 2 === 0;
    }

    return (
        <>
            <h2>Forex Rates Table</h2>
            <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Currency</th>
                                <th>Original Rate</th>
                                <th>Adjusted Rate</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Object.entries(forexRates).map(([currency,rates])=>{
                                const shouldHighlight = checkEvenNumber(rates) 
                                || checkEvenNumber(adjustedRates[currency]) 
                                || currency === "HKD";

                                return(
                                    <tr 
                                        key={currency} 
                                        className={shouldHighlight ? "table-highlight-red" : ""}
                                    >
                                        <td>{currency}</td>
                                        <td>{(rates).toFixed(6)}</td>
                                        <td>{(adjustedRates[currency]).toFixed(6)}</td>
                                    </tr>
                                )
                                
                            })}
                            
                        </tbody>
                    </table>
                </div>
                
                {/* raw html
                <pre>{JSON.stringify(forexRates,null,2)}</pre>  */}
            
        </>
    )
}