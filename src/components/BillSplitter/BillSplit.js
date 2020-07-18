import React, {useState, useEffect} from 'react';
import './BillSplit.css';

function BillSplit(){
    const [totalBill, setTotalBill] = useState(0);
    const [personCount, setPersonCount] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [totalSplit, setTotalSplit] = useState(0);

    const billPerPerson = totalBill / personCount;
    const eachShare = billPerPerson + billPerPerson * tipPercent/100;
    // setTotalSplit(totalSplit);
    
    useEffect(() => {
        setTotalSplit((eachShare)?eachShare:0);
    }, [eachShare]);
    // const totalSplit = (()) / personCount;
    return (
        <div className="areaBorder">
            <h1>Bill Calculator</h1>
            <div class = "bill">
                <label for="totalAmount">Total Bill Amount : </label>
                <input type="number" name="totalAmount" id="totalAmount" value={totalBill} onChange={(e) => setTotalBill(e.target.value)}/>
            </div>
            <div class = "person">
                <label for="totalPerson">Total Persons : </label>
                <input type="number" name="totalPerson" id="totalPerson" value={personCount} onChange={(e)=>setPersonCount(e.target.value)}/>

                <label for="tipPerson">Tip Percent Per Person : </label>
                <input type="number" min="1" max="100" name="tipPerson" id="tipPerson" value={tipPercent} onChange={(e) => setTipPercent(e.target.value)}/>
            </div>
            <div class="split">
                <h1>Total Split Per Person</h1>
                <p>{totalSplit}</p>
            </div>
        </div>
    );
}

export default BillSplit;