import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

interface PropLink{
    txtColor?:string;
    txtHoverColor?:string;
}

export const LinkAuth=styled(Link)<PropLink>`
    text-decoration: none;
    margin: 0;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
    transition: all .25s ease;
    color: ${props=>props.txtColor || Colors.yellow_500};  
    :hover{
        color:${props=>props.txtHoverColor || Colors.yellow_600}
    }
`;
