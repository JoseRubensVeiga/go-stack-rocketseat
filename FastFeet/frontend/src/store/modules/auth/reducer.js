import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;
        draft.signed = true;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.user = null;
        draft.signed = null;
        break;
      }
      default:
    }
  });
}
