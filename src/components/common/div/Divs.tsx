import styled from "styled-components";
import { Colors } from "../../../utils/Colors";

interface DivInp{
    borderColor?:string;
    borderFocusColor?:string;
    svgColor?:string;
    svgFocusColor?:string;
}


export const DivInput=styled.div<DivInp>`
    display: -ms-flexbox; /* IE10 */
    display: flex;
    width: 100%;
    padding: 0.2rem;
    border: 2px solid ${props=>props.borderColor || Colors.gray_500} ;
    border-radius: 50px;
    transition: all .25s ease;
    svg{
    color: ${props=>props.svgColor || Colors.gray_500};
    min-width: 40px;
    text-align: center;
    }

    &:focus-within{
        border: 2px solid ${props=>props.borderFocusColor || Colors.green_700};
    }
    &:focus-within svg{
        color: ${props=>props.svgFocusColor || Colors.green_700};
    }
`;