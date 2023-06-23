/* eslint-disable prettier/prettier */
import { Button, Text, View } from 'react-native';
import { useState, useEffect} from 'react';
interface ExampleProps {
  text?: string;
  children?: string;
}

const Example = ({ text, children }: ExampleProps) => {

  const [newText, setNewText] = useState(0);
  useEffect(() => {
    console.log('passou aqui')
  }, [newText, text, children])
  
  return (
    <View>
      <Text>{children}</Text>
      <Text>{newText || text}</Text>
      <Button onPress={() => setNewText(newText+1)} title='BOTAO'/>
    </View>
  );
};
export default Example;
