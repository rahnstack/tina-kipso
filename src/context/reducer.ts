import { Action, ACTION_TYPES, StateType } from "./contextUtils";

export const AppReducer = (state: StateType, action: Action) => {
  // const router = useRouter();
  // const { t, locale } = useTranslation();
  switch (action.type) {
    case ACTION_TYPES.SET_USER: {
      return { ...state, user: action.payload } as StateType;
    }

    default:
      return state;
  }
};
