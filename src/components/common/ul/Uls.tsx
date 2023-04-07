import styled from "styled-components";
import { Colors } from "../../../utils/Colors";

export const SUl=styled.ul`
    margin: 2rem 0;
    font-size: 0.8rem;
    color: ${props=>props.color || Colors.light};
    li{
    line-height: 14px;
    margin-bottom: 1rem;
    }
`