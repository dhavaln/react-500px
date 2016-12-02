
const defaultState = {
  isLoading: false,
  isError: false,
  photo: {},
  comments: [],
  message: ''
}

export default function photoDetail(state = defaultState, action){
  switch(action.type){
    case 'LOADING_PHOTO_DETAIL':
      return Object.assign({}, state, {isLoading: true});
    case 'PHOTO_DETAIL':
      return Object.assign({}, state, {isLoading: false, isError: false, photo: action.detail.photo, comments: action.detail.comments});
    case 'ERROR_PHOTO_DETAIL':
      return Object.assign({}, state, {isLoading: false, isError: true, message: action.message});
    default:
      return state;
  }
}
