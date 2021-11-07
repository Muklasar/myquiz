const init = {
    data: null,
    error: undefined
}

export const dataReducer = (state=init, action) =>{
    switch(action.type){
        case 'FETCH_DATA_SUCCESS':
            return({ ...state, data: action.payload })
        case 'FETCH_DATA_FAILURE':
            return({ ...state, data: action.payload })
        default:
            return state 
    }
}