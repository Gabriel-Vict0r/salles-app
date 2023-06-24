import { Text, TextInput, View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
const Login = () => {
  const style = {
    text: { backgroundColor: "blue" },
    textColor: "white",
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input />
      </ContainerLogin>
    </View>
  );
};

export default Login;
