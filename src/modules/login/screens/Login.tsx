import { Text, TextInput, View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import { ButtonContainer } from "../../../shared/components/button/button.style";
const Login = () => {
  const style = {
    text: { backgroundColor: "blue" },
    textColor: "white",
  };
  const handleOnPress = () => {
    console.log("clicou");
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input />
        <Button margin='8px' title="ENVIAR" onPress={handleOnPress}/>
      </ContainerLogin>
    </View>
  );
};

export default Login;
