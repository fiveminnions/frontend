import { jobsAppliedConstants } from '../_constants';
import axios from 'axios';

export const jobsAppliedActions = {
    docUploadSuccess,
    docUploadError,
    jobsAppliedFetchSuccess,
    jobsAppliedFetchError
};

const responseFailure = {
    type: "Error",
    Message: "Please Contact Administrator."
}

function docUploadSuccess(data) {
    return { type: jobsAppliedConstants.JOBS_APPLIED_DOC_UPLOAD_SUCCESS, data };
}

function docUploadError(error) {
    return { type: jobsAppliedConstants.JOBS_APPLIED_DOC_UPLOAD_FAILURE, error };
}

function jobsAppliedFetchSuccess(data) {
    return { type: jobsAppliedConstants.JOBS_APPLIED_DOC_UPLOAD_SUCCESS, data };
}

function jobsAppliedFetchError(error) {
    return { type: jobsAppliedConstants.JOBS_APPLIED_DOC_UPLOAD_FAILURE, error };
}

export function upLoadDocument(uploadObj) {
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
                dispatch(jobsAppliedActions.docUploadSuccess(response));
            })
            .catch(function (error) {
                dispatch(jobsAppliedActions.docUploadError(responseFailure));
            });
    }
}

export function fetchJobsApplied(userObj) {
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
                dispatch(jobsAppliedActions.jobsAppliedFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(jobsAppliedActions.jobsAppliedFetchError(responseFailure));
            });
    }
}