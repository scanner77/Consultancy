import React, {useState, useEffect} from 'react'
import axios from 'axios'


const MyAccount = () => {
    const[deals, setDeals] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect = () => {
        axios({
            method: 'GET',
            url: `http://localhost:8080/`
        }).then(
            res => {
                setDeals(res);
            })
            setLoading(false)
    }
    
    return (
        <div>
            {loading && <p>It's loading</p>}
            {
                !loading && 
                <>
                {deals.map((deal, i) => (
                    <div key = {i}>
                        {deal.name}
                    </div>
                ))}
                </>
            }
        </div>
    )
}

export default MyAccount
