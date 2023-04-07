import styled from 'styled-components';
import {xs,sm,md,lg} from '../../../media';
import { Colors } from '../../../utils/Colors';

export const ContainerAuth = styled.div`

    width:100%;
    min-height: 100vh;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;


    ${md}{

        &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 35rem;
    height: 35rem;
    border-radius: 50%;
    background-color: ${Colors.green_700};
    bottom: 0;
    right: 0;
  }
   &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 35rem;
    height: 35rem;
    border-radius: 50%;
    background-color: ${Colors.green_700};
    top: 0; 
    left: 0;
  }

    }



    .cont-auth{

        height:100%;
        border-radius:20px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        background-color:${Colors.light};

        ${xs}{
            width:100%;
        }

        ${sm}{
            width:80%;
        }

        ${md}{
            height:32rem;
            width:70%;
        }

        ${lg}{
            width:60%;
        }

    };

`;

