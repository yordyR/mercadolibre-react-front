import { useState } from "react";

const initialState = {
    categories: [],
    spinner: true
}

const useInitialState = () =>{
    const [state,setState] = useState(initialState)
    const dataCategories = (payload) =>{
        setState({
            categories: payload
        })
    }
    const showSpinner = (payload) =>{
        setState({
            ...state,
            spinner: payload
        })
    }
    return {
        state,
        dataCategories,
        showSpinner
    }
}

export default useInitialState
