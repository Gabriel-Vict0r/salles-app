import { useCallback, useState } from 'react';
const Test = () => {
  const [name, setName] = useState('Gabriel');
  const [lastName, setLastName] = useState('Victor');
  const handleChangeName = () =>
    useCallback(() => {
      setName(`Gabriel ${lastName}`);
    }, [lastName]);

  const handleChangeLastName = () => {
    setLastName('Souza');
  };

  return (
    <div>
      <button onClick={handleChangeName}>nome</button>
      <button onClick={handleChangeLastName}>nome</button>
    </div>
  );
};

export default Test;
