import { toast } from "react-hot-toast";

export const handleFulfilledRegistration = (state, { payload }) => {
  state.error = null;
  state.user.displayName = payload.displayName;
  state.user.email = payload.email;
  state.user.uid = payload.uid;
  state.token = payload.accessToken;
  state.isLoading = false;
  state.isAuthCheck = true;
  state.status = "fulfilled";
};
export const handleFulfilledLogin = (state, { payload }) => {
  state.error = null;
  state.user.displayName = payload.displayName;
  state.user.email = payload.email;
  state.user.uid = payload.uid;
  state.token = payload.accessToken;
  state.isLoading = false;
  state.isAuthCheck = true;
  state.status = "fulfilled";

  toast.success(`You've successfuly logged!`, {
    duration: 2800,
    position: "top-center",
  });
};

export const handleFulfilledCurrentUser = (state, { payload }) => {
  state.error = null;
  state.user.displayName = payload.displayName;
  state.user.email = payload.email;
  state.user.uid = payload.uid;
  state.token = payload.accessToken;
  state.isLoading = false;
  state.isAuthCheck = true;
  state.status = "fulfilled";
};

export const handleFulfilledLogOut = (state) => {
  state.user.displayName = null;
  state.user.email = null;
  state.user.uid = null;
  state.token = null;
  state.isVerify = false;
  state.isLoading = false;
  state.error = null;
  state.isAuthCheck = false;

  toast.success(`You've successfuly logout!`, {
    duration: 2800,
    position: "top-center",
  });
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.status = "pending";
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.status = "rejected";

  if (state.error) {
    toast.error("Sorry, email or password is wrong...", {
      duration: 2800,
      position: "top-center",
    });
  }
};

export const handleAuthorizationGoogle = (state, { payload }) => {
  state.error = null;
  state.user.displayName = payload.displayName;
  state.user.email = payload.email;
  state.user.uid = payload.uid;
  state.token = payload.accessToken;
  state.isLoading = false;
  state.isAuthCheck = true;
  state.status = "fulfilled";
};
