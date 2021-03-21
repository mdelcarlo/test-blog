export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const LOAD_POST_LIST = "LOAD_POST_LIST";
export const LOAD_POST = "LOAD_POST";
export const RENDER_POST_LIST = "RENDER_POST_LIST";
export const RENDER_POST = "RENDER_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const LOAD_COMMENT_LIST = "LOAD_COMMENT_LIST";
export const RENDER_COMMENT_LIST = "RENDER_COMMENT_LIST";

export function addPost(title: string, body: string) {
  return {
    type: ADD_POST,
    post: {
      _id: new Date().getTime(),
      title,
      body,
    },
  };
}

export function deletePost(id: number) {
  return {
    type: DELETE_POST,
    post: {
      id,
    },
  };
}

export function loadPostList() {
  return {
    type: LOAD_POST_LIST,
  };
}

export function loadPost(id: number) {
  return {
    type: LOAD_POST,
    post: { id },
  };
}

export function addComment(title: string) {
  return {
    type: ADD_COMMENT,
    comment: {
      _id: new Date().getTime(),
      title,
    },
  };
}

export function loadCommentList() {
  return {
    type: LOAD_COMMENT_LIST,
  };
}
