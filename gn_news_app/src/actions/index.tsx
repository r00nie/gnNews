export const TOGGLE_LIST = 'TOGGLE_LIST';

interface ToggleListAction {
  type: typeof TOGGLE_LIST;
  payload: boolean;
}

export type AppAction = ToggleListAction;

export function toggleList(isList: boolean): ToggleListAction {
  return {
    type: TOGGLE_LIST,
    payload: isList,
  };
}