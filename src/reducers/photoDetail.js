import { PHOTO_DETAIL_FETCH, PHOTO_DETAIL_ERROR, PHOTO_DETAIL_LOADED } from '../actions/photoDetail';

const defaultState = {
  isLoading: false,
  isError: false,
  photo: { user: {}},
  comments: [],
  message: ''
}

export default function photoDetail(state = defaultState, action){
  switch(action.type){
    case PHOTO_DETAIL_FETCH:
      return Object.assign({}, state, {isLoading: true});
    case PHOTO_DETAIL_LOADED:
      return Object.assign({}, state, {isLoading: false, isError: false, photo: action.detail.photo, comments: action.detail.comments});
    case PHOTO_DETAIL_ERROR:
      return Object.assign({}, state, {isLoading: false, isError: true, message: action.message});
    default:
      return state;
  }
}
