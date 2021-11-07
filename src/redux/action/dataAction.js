import * as axios from "axios"

const fetchDataSuccess = payload =>({
    type: 'FETCH_DATA_SUCCESS',
    payload
})

const fetchDataFailure = payload =>({
    type: 'FETCH_DATA_FAILURE',
    error: payload
})

export const fetchDataAsync = () => async dispatch =>{
    axios.get("https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple")
    .then(res=>{
        dispatch(fetchDataSuccess(res.data.results))
    })
    .catch(err=>{
        console.log(err)
        dispatch(fetchDataFailure(err))
    })
}