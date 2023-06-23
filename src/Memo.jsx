import { useMemo, useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

const Memo = () => {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);

  const calc = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += 1;
    }
    return sum;
  }, []);
  return (
    <SafeAreaView>
      <Button
        onPress={() => setValue1((current) => current + 1)}
        title="TESTE"
      />
      <Text>{value1}</Text>
      <Button
        onPress={() => setValue2((current) => current + 1)}
        title="TESTE"
      />
          <Text>{value2}</Text>
          <Text>{calc}</Text>
    </SafeAreaView>
  );
};

export default Memo;
