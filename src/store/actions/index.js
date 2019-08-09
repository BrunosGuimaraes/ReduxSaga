export const loginRequest = celular => ({
  type: "LOGIN_REQUEST",
  payload: { celular }
});

export const loginSuccess = (nome, celular) => ({
  type: "LOGIN_SUCCESS",
  payload: { nome, celular }
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE"
});
