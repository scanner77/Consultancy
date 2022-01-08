import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List'

const MyAccount = () => {
    const [records, setRecords] = useState([])

    const getRecords = () => {
        axios.get(`http://localhost:8080/api/getAll`).then((response) => {
            console.log(response);
            const getAllRecords = response.data;
            setRecords(getAllRecords);
    })}
    console.log(setRecords)

    useEffect(() => getRecords(), [])

    return (
        <>
            {/* <div style = {{display: 'flex', height: '200px', alignItems:'center', justifyContent:'center'}}><CircularProgress/></div> */}
                 <Grid container spacing = {2}>
                     {records.map((record) => (
                         <Grid item key = {record.id}>
                             <h1>{record.email}</h1>
                         </Grid>
                     ))}
                 </Grid>
        </>
    )
}

export default MyAccount
