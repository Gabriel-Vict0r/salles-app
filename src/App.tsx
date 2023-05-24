/* eslint-disable prettier/prettier */
import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

const NewText = styled.Text`
  font-size: 30px;
  color: red;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Testando</Text>
      <NewText>Teste2</NewText>
    </SafeAreaView>
  );
};
export default App;
