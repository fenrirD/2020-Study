import {createAction, handleActions} from 'redux-actions'

const REUDX_TEST = 'test/REDUX_TEST'

export const testAction = createAction(REUDX_TEST, payload => payload)
const initialState = {

}

export default handleActions(
    {
        [REUDX_TEST] : (state, action) =>{
            console.log('reducer ')
            return {
                ...state
            }
        }
    },
    initialState
)
