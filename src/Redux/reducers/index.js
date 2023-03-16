import {
    GET_PASTELS,
    LOADING_TYPE
} from '../actions';

const initialState = {
    pastels: [],
    isLoading: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PASTELS:
            return {
                ...state,
                pastels: action.payload
            };
        case LOADING_TYPE:
             return {
                ...state,
                isLoading: true,
             };
     default:
          return state;
    }
};



export default rootReducer;