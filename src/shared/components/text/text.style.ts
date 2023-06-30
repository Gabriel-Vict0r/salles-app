import styled from "styled-components/native";
interface ContainerTextProps {
    color?: string; 
    size: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
}
export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props) => props.color ? `color: ${props.color};` : ''}
    font-size: ${(props) => props.size};
    font-family: ${(props) => props.fontFamily};
`