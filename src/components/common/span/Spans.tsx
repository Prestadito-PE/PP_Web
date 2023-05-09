import styled from "styled-components";
import { Colors } from "../../../styles/Colors";



export const SpanErr=styled.span`
    font-size: 0.75rem;
    color: ${props=>props.color || Colors.red_500};
    padding-left: 0.2rem;
`;

