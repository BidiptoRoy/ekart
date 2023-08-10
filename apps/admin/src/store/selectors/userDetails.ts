import { userState } from "../atoms/user";
import { selector } from "recoil";

export const userEmailState = selector({
  key: "userEmailState",
  get: ({ get }) => {
    const state = get(userState);
    return state.userEmail;
  },
});

export const userIsLoadingState = selector({
  key: "userIsLoadingState",
  get: ({ get }) => {
    return get(userState).isLoading;
  },
});
