import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

interface ButtonProps{
    bgColor?: string;
    txtColor?: string;
    bgHoverColor?:string;
    txtHoverColor?:string;
    isActive?:boolean;
}

export const SButton=styled.button<ButtonProps>`
    background-color: ${props=>props.isActive===false?(props.bgColor || Colors.green_700):Colors.gray_800};
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
    cursor: ${props=>props.isActive===false?"pointer":"none"};
    transition: all .25s ease;
    :hover{
        background-color: ${props=>props.isActive===false?(props.bgHoverColor || Colors.green_800):Colors.gray_800};
    }
    :active{
        transform:  ${props=>props.isActive===false?"translateY(2px)":"none"};
    }
`;