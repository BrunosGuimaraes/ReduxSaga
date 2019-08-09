import { all, takeLatest, take, call, put } from "redux-saga/effects";
// import { navigate } from "../../services/navigation";
import * as LoginActions from "../../store/actions";
import axios from "axios";

function* login(action) {
  const { celular } = action.payload;

  try {
    const response = yield call(
      axios.get,
      `http://solucoes2devs-001-site1.ftempurl.com/api/usuario/${celular}`
    );

    const { nome, numeroCelular } = response.data;

    yield put(LoginActions.loginSuccess(nome, numeroCelular));

    //navigate("Home");
  } catch (err) {
    console.log("ERRO NA REQUISIÇâO");
    console.log(err);
    //yield put(LoginActions.loginfailure());
  }
}

export default function* rootSaga() {
  return yield all([takeLatest("LOGIN_REQUEST", login)]);
}
