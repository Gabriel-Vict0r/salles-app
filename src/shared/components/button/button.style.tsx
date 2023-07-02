import styled from "styled-components/native";
import { theme } from "../../themes/theme";
import LinearGradient from "react-native-linear-gradient";

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  align-items: center;
  justify-content: center;
`;
export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  background-color: transparent;
  border: 1px ${theme.colors.mainTheme.primary} solid;
`;
export const ButtonGradient = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  background-color: transparent;
  border: 1px ${theme.colors.mainTheme.primary} solid;
`;

export const GradientButton = styled(LinearGradient)`
  width: 100%;
  height: 100%;
`