import { CREDENTIAL_INFO } from './types';

const credInfo = [{userName : 'rakshith',password :'1234'},{userName : 'vinay',password :'12345'}];

export const credentials = () => (dispatch) => {

    console.log('am')
    dispatch({
      type: CREDENTIAL_INFO,
      payload: credInfo});
}