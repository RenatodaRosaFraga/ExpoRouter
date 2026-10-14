import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  
const handleLogin = () => {
  if (usuario === "admin" && senha === "1234") {
    router.push("/privada/noticias");
    alert("Login bem-sucedido!");
  } else {
    alert("Usuário ou senha incorretos.");
  }
};


  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: '80%',
  },
});
