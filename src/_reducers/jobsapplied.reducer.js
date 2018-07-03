import { jobsAppliedConstants } from '../_constants';


const initialState = {};

export function jobsAppliedReducer(state = initialState, action) {
    switch (action.type) {
        case jobsAppliedConstants.JOBS_APPLIED_FETCH_SUCCESS:
            return {
                jobs: action.data
            };
        case jobsAppliedConstants.JOBS_APPLIED_FETCH_FAILURE:
            return { jobs: action.error };
        case jobsAppliedConstants.JOBS_APPLIED_DOC_UPLOAD_SUCCESS:
            return {
                docUpload: action.data
            };
        case jobsAppliedConstants.JOBS_APPLIED_DOC_UPLOAD_FAILURE:
            return { docUpload: action.error };
        default:
            return state
    }
}