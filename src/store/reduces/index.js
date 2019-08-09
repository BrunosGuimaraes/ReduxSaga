const INITIAL_STATE = {
  nome: "",
  celular: ""
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log(state);
      console.log(action.payload.nome);
      console.log(action.payload.celular);
      return {
        ...state,
        nome: action.payload.nome,
        celular: action.payload.celular
      };
    case "LOGIN_FAILURE":
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
