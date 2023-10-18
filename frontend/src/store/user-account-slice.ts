import { UserAccount, UserAccountDto } from "@/domain/entities/user-account";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface UserAccountState {
  userAccount: UserAccount | null;
}

const initialState: UserAccountState = {
  userAccount: null
};

const userAccountSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserAccount(state, action: PayloadAction<UserAccountDto>) {
      const userAccount = new UserAccount(
        action.payload.id,
        action.payload.email,
        action.payload.profiles ?? []
      );

      state.userAccount = userAccount;
    },
    deleteProfileById(state, action: PayloadAction<string>) {
      if (state.userAccount) {
        const userAccount = state.userAccount;
        userAccount.removeProfile(action.payload);
        state.userAccount = userAccount;
      }
    }
  }
});

export const {
  setUserAccount,
  deleteProfileById 
} = userAccountSlice.actions;
export default userAccountSlice;
export const selectUserAccount = (state: RootState) => state.userAccount.userAccount;
