import { CREDENTIAL_INFO } from '../actions/types';

const initialState = {
    credential: []
}

export default function(state = initialState, action) {
    console.log('am in reducers' + action.type);
    switch(action.type){
        case CREDENTIAL_INFO:
           return {
               ...state,
               credential: action.payload
           };
        default: return state;
    }
}