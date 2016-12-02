
function page1(state = {}, action){
  if(action.type === 'PAGE1_CLICK'){
    return {...state, click: state.click+1}
  }else{
    return state;
  }
}

export default page1;
