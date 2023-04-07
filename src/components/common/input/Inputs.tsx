import styled from "styled-components";
import { Colors } from "../../../utils/Colors";


export const SInput=styled.input`
    color: ${props=>props.color||Colors.gray_600};
    width: ${props=>props.width||"80%"};
    outline: none; 
    border: none;
    background: none;
    transition: all .25s ease;
    ::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: ${props=>props.color||Colors.gray_600};
    }
`;




