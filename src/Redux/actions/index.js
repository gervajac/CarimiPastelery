import axios from "axios";
import { SERVER_URL } from "../../domain/serverConfig"

export const GET_PASTELS = "GET_PASTELS";
export const LOADING_TYPE = "LOADING_TYPE";


export const getPastels = () => {

    console.log("asdddd")
    return async function (dispatch) {
        try {
            let response = await axios.get(`${SERVER_URL}/pastels`)
            console.log(response, "responSEED")
            return dispatch({
                type: GET_PASTELS,
                payload: response.data
            })
        }
        catch(err){
            console.log(err)
        }
    };
};

export const loading = () => {
    return {
      type: LOADING_TYPE,
      payload: true,
    };
  };