import axios from "axios";
import { SERVER_URL } from "../../domain/serverConfig"

export const GET_PASTELS = "GET_PASTELS";
export const LOADING_TYPE = "LOADING_TYPE";


export const getPastels = () => {


    return async function (dispatch) {
        try {
            let response = await axios.get(`${SERVER_URL}/pastels`)
            
            return dispatch({
                type: GET_PASTELS,
                payload: response.data
            })
        }
        catch(err){
            
        }
    };
};

export const loading = () => {
    return {
      type: LOADING_TYPE,
      payload: true,
    };
  };