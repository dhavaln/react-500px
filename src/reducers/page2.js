
function page2(state = {}, action){
  if(action.type === 'PAGE2_CLICK'){
    return {...state, click: state.click+1}
  }else{
    return state;
  }
}

export default page2;
