import axios from "axios"

export const createINCRAction = () => {
    return {
        type: "INCR_CTR"
    }
} 

export const createDECRAction = () => {
    return {
        type: "DECR_CTR"
    }
} 

export const createFetchCustomers = () => {
    return async (dispatch) => {

        const url = process.env.REACT_APP_CUSTOMERS_URL;
        try {
            const resp = await axios.get(url);
            dispatch({
                type: "FETCH_CUSTOMERS",
                payload: resp.data
            })

        } catch (error) {
            
        }

    }
}