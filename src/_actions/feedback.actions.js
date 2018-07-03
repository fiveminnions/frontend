import { feedBackConstants } from '../_constants';
import axios from 'axios';

export const feedBackActions = {
    success,
    error
};

const responseFailure = {
    type: "Error",
    Message: "Please Contact Administrator."
}
function success(data) {
    return { type: feedBackConstants.FEEDBACK_SUCCESS, data };
}

function error(error) {
    return { type: feedBackConstants.FEEDBACK_FAILURE, error };
}

export function submitFeedBack(feedBackObj) {
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
                dispatch(feedBackActions.success(response));
            })
            .catch(function (error) {
                dispatch(feedBackActions.success(responseFailure));
            })
            .then(function () {
                // always executed
            });
    }
}