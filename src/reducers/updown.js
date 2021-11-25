const intialState = 0;

const changeNum = (state=intialState, action)=> {

    switch(action.type){
        case "Increment": return state + 1;
        case "Decrement": return state - 1;
        default: return state;
    }


}

export default changeNum;