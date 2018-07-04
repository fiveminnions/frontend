import { contactUsConstants } from '../_constants';
import axios from 'axios';

export const contactUsActions = {
    success,
    error
};

const responseFailure = {
    type: "Error",
    Message: "Please Contact HR at HR@excelon.com."
}
function success(data) {
    return { type: contactUsConstants.CONTACT_US_SUCCESS, data };
}

function error(error) {
    return { type: contactUsConstants.CONTACT_US_FAILURE, error };
}

export function sendEmail(contactUs) {
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
                dispatch(contactUsActions.success(response));
            })
            .catch(function (error) {
                dispatch(contactUsActions.error(responseFailure));
            });
    }
}