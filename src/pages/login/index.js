import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Colors } from "react-native/Libraries/NewAppScreen";
import * as LoginActions from "../../store/actions";

class Login extends Component {
  state = {
    nome: "",
    celular: ""
  };

  signIn = () => {
    const { celular } = this.state;
    const { loginRequest } = this.props;

    loginRequest(celular);
  };

  render() {
    const { celular, nome } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.body}>
          <Text style={styles.sectionDescription}>Entendendo Redux Saga</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.text}>Usuário</Text>
          <TextInput
            style={styles.input}
            onChangeText={celular => this.setState({ celular: celular })}
          />
          <TouchableOpacity style={styles.button} onPress={() => this.signIn()}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.sectionDescription}>{nome}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "stretch"
  },
  body: {
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    color: Colors.white,
    lineHeight: 21
  },
  form: {
    marginTop: 10 * 2
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 3,
    height: 44,
    marginTop: 10,
    margin: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    backgroundColor: Colors.secundary,
    borderRadius: 3,
    height: 44,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 14
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.white
  }
});

const mapStateToProps = state => ({
  nome: state.nome,
  celular: state.celular
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
