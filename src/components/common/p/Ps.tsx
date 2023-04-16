import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

interface PLink{
    pColor?:string;
    aColor?:string;
}

export const TextLink=styled.p<PLink>`
    margin-top: 1.5rem;
    font-size: 0.9rem;
    text-align: center;
    color: ${props=>props.pColor || Colors.gray_600};
    font-weight: 400;
    a{
    text-decoration: none;
    color: ${props=>props.aColor || Colors.green_700};
    font-weight: 500;
    }
`;


// rgba(123, 128, 154, 1)