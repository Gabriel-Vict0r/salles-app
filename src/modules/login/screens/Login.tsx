import { TextInput, View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import { ButtonContainer } from "../../../shared/components/button/button.style";
import Text from "../../../shared/components/text/text";
import { textTypes } from "../../../shared/components/text/textTypes";
import { theme } from "../../../shared/themes/theme";
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
        <Text type={textTypes.TITLE_BOLD}>Login</Text>
        <Input />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="8px"
          title="ENVIAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
