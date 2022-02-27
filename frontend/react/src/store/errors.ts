const ADD = 'errors/ADD';
const SHOW = 'errors/SHOW';
const HIDE = 'errors/HIDE';

export const AddError = (error: string): ErrorsAction => ({
  type: ADD,
  error
});

export const ShowErrors = (): ErrorsAction => ({
  type: SHOW
});

export const HideErrors = (): ErrorsAction => ({
  type: HIDE
});

export default function reducer (
  state: ErrorsState = { current: [], display: false },
  { type, error }: ErrorsAction
) {
  switch (type) {
    case ADD:
      return {
        ...state,
        current: [
          ...state.current,
          error
        ]
      };
    case SHOW:
      return {
        ...state,
        display: true
      };
    case HIDE:
      return {
        ...state,
        current: [],
        display: false
      };
    default:
      return state;
  }
}
