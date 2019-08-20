
import _ from 'lodash'

const initial = {
    result:[]
}

const StudentReducer = (state = initial, action) => {
    const nextState = _.cloneDeep(state);

    switch (action.type) {
        case "INSERT":
            nextState.result = [...state.result,action.payload];
            // console.log("Next",nextState)
            return nextState
        case "QUERY":
            nextState.result = [...state.result,action.payload];
            return nextState
        case "DELETE":
            nextState.result = [...state.result,action.payload];
            return nextState
        default:
            return nextState
    }
}

export default StudentReducer