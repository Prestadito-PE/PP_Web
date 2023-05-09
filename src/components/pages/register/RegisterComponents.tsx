import styled,{keyframes} from 'styled-components';
import bg_auth from '../../../assets/image/auth/bg_auth.png';
import { Grid } from "@mui/material";
import { lg, md } from '../../../styles/media';


const fadeFormY = keyframes`

    from{transform: translate3d(0, -100%, 0); opacity: 0.3;}
    to{transform: translate3d(0, 0, 0); opacity: 1;}  
`;

const fadeFormX =keyframes`
            from{transform: translate3d(-100%, 0, 0); opacity: 0.3;}
        to{transform: translate3d(0, 0, 0); opacity: 1;}
`;

const fadeContentY = keyframes`
        from{
            transform: translate3d(0, 100%, 0); 
            opacity: 0.3;}
        to{
            transform: translate3d(0, 0, 0); 
            opacity: 1;
        }  
`; 

const fadeContentX=keyframes`
            from{
            transform: translate3d(100%, 0, 0); 
            opacity: 0.3;
        }
        to{
            transform: translate3d(0, 0, 0);
             opacity: 1;
        }
`;

export const GridForm=styled(Grid)`
    animation: ${fadeFormY} 2s;
    height: 50%;
    padding: 0px 1rem 0px 1rem;
    ${md}{
        height: 100%;
        animation: ${fadeFormX} 2s;
        padding: 2rem;
    }
    ${lg}{
        padding: 2.5rem;
    }
    animation-iteration-count: 1;
`;

export const GridContent=styled(Grid)`
    height: 50%;
    padding: 0px 1rem 0px 1rem;
    background-size:cover;
    background: linear-gradient(0deg, rgba(89, 177, 93, 0.8), rgba(89, 177, 93, 0.8)), url(${bg_auth});
    backdrop-filter: blur(2px);
    padding:1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeContentY} 2s;
    ${md}{
        height: 100%;
        animation: ${fadeContentX} 2s;
        padding: 2rem;
    }
    ${lg}{
        padding: 2.5rem;
    }
    animation-iteration-count: 1;
`;



