//Action Type
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//Create Action Func
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
    number: 0,
};

//Reducer Func
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE: 
            return {
                number: state.number + 1,
            };
        case DECREASE:
            return {
                number: state.number - 1,
            };
        default:
            return state;        
    }
}

export default counter;