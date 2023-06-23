import { useState, useEffect} from "react";
import { Alert } from "react-native";

export const useApp = () => {
    const [value, setValue] = useState("abc");
    // useEffect(() => {
    //     Alert.alert('Hellou', 'entrou meu querido', [{
    //     text: 'OK'}])
    // }, [])
    
    const handlePress = () => (value == 'abc' ? setValue('def') : setValue('abc'))

    return { value, handlePress }
}