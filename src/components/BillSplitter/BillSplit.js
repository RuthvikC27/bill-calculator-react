import React, {useState, useEffect} from 'react';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
    centerField: {
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '3%',
    },
    topMarginInput: {
        marginTop: '2%',
    }
})
);

function BillSplit(){
    const classes = useStyles();

    const [totalBill, setTotalBill] = useState('');
    const [personCount, setPersonCount] = useState('');
    const [tipPercent, setTipPercent] = useState('');
    const [totalSplit, setTotalSplit] = useState(0);

    const billPerPerson = totalBill / personCount;
    const eachShare = billPerPerson + billPerPerson * tipPercent/100;
    // setTotalSplit(totalSplit);
    
    useEffect(() => {
        setTotalSplit((eachShare)?eachShare:0);
        console.log("Executing")
    }, [eachShare]);
    // const totalSplit = (()) / personCount;
    return (
        <Container maxwidth='sm'>
            <Grid container>
                <Grid item xs={12}>
                    <Typography 
                    variant="h3" 
                    color="textSecondary" 
                    align="center"
                    >Bill Calculator
                </Typography>
                </Grid>
                <Grid item xs={12}>
                    <form noValidate autoComplete='off' className={classes.centerField}>
                        <div>
                            <TextField 
                                className={classes.topMarginInput}
                                autoFocus='true' 
                                type="number" 
                                display="initial" 
                                id="totalAmount" 
                                label="Total Amount" 
                                variant="outlined" 
                                value={totalBill} 
                                color="primary" 
                                onChange={(e) => setTotalBill(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField 
                                className={classes.topMarginInput}
                                type="number" 
                                id="totalPerson" 
                                label="Total persons" 
                                variant="outlined" 
                                value={personCount} 
                                onChange={(e)=>setPersonCount(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField 
                                className={classes.topMarginInput}
                                type="number" 
                                id="tipPerson" 
                                label="Tip Percent" 
                                variant="outlined" 
                                value={tipPercent} 
                                onChange={(e) => setTipPercent(e.target.value)}
                            />
                        </div>
                    </form>
                </Grid>
                <Grid item xs={12}>
                    <Typography 
                        variant="h3" 
                        color="textSecondary" 
                        align="center"
                        >Total Split Per Person
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography 
                        className={classes.topMarginInput}
                        variant="h3" 
                        color="textSecondary" 
                        align="center"
                        >{totalSplit}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default BillSplit;