import {REQUEST_TWEETS, RECEIVE_TWEETS} from '../actions/handles'

export default (state = [], action) => {
    switch (action.type) {

        case REQUEST_TWEETS:
            let newState = state.map((handle) => handle);
            newState.push({
                name: action.handle,
                data: []
            });
            return newState;

        case RECEIVE_TWEETS:
            return state.map((handle) => {
                if (handle.name === action.handle) {
                    handle.data = action.data
                }
                return handle;
            });

        default:
            return state
    }
}
