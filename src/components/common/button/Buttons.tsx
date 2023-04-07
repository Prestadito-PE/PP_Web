import styled from "styled-components";
import { Colors } from "../../../utils/Colors";

interface ButtonProps{
    bgColor?: string;
    txtColor?: string;
    bgHoverColor?:string;
    txtHoverColor?:string;
}

export const SButton=styled.button<ButtonProps>`
    background-color: ${props=>props.bgColor || Colors.green_700};
    width: 100%;
    color:${props=>props.txtColor || Colors.light};
    border-radius: 50px;
    margin-top:2rem;
    padding: 6px 16px;
    font-size:1.1rem;
    font-weight:500;
    text-transform: uppercase;
    letter-spacing: 0.02857em;
    line-height: 1.75;
    border: 0;
    cursor: pointer;
    transition: all .25s ease;
    :hover{
        background-color: ${props=>props.bgHoverColor || Colors.green_800};
    }
    :active{
        transform: translateY(2px);
    }
`;