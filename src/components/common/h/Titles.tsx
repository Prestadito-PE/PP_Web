import styled from "styled-components";
import { Colors } from "../../../utils/Colors";


interface PropH{
    txtColor?:string;
    spColor?:string;
}

export const SH3=styled.h3<PropH>`
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
    color: ${props=>props.txtColor || Colors.black};

    span{
        color: ${props=>props.spColor || Colors.green_700};
    }
`;