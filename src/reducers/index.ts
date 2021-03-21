import {
  LOAD_POST,
  LOAD_POST_LIST,
  ADD_POST,
  RENDER_POST_LIST,
  RENDER_POST,
  RENDER_COMMENT_LIST,
} from "../actions";
import { STATUS } from "../util/constants";

interface IPostState {
  postList: any;
  commentList: any;
}

const initialState: IPostState = {
  postList: [],
  commentList: [],
};

export default function rootReducer(
  state = initialState,
  action: { type: any; postList: any; post: any; commentList: any }
) {
  switch (action.type) {
    case LOAD_POST_LIST:
      return {
        ...state,
        postList: { status: STATUS.LOADING },
      };
    case RENDER_POST_LIST:
      return {
        ...state,
        postList: action.postList,
      };
    case LOAD_POST:
      return {
        ...state,
        post: { status: STATUS.LOADING },
        commentList: { status: STATUS.LOADING },
      };
    case RENDER_POST:
      return {
        ...state,
        post: action.post,
      };
    case RENDER_COMMENT_LIST:
      return {
        ...state,
        commentList: action.commentList,
      };
    case ADD_POST:
      let newPostList = [
        ...state.postList,
        {
          ...action.post,
        },
      ];
      return {
        ...state,
        postList: newPostList,
      };
    default:
      return state;
  }
}
