import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getItem } from '../../utils/localStorage';
import { ResponseLogin } from '../../components/interfaces/User/User.interface';



const initialState: ResponseLogin= getItem('session') || [];

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    loginSession: (state, action: PayloadAction<ResponseLogin>) => {
      const { strId, strToken } = action.payload;
      if (
        state != null &&
        (strId.length>0 && strToken.length>0) 
      ) {
        state=(action.payload);
      }
    },
    logoutSession: (state, action: PayloadAction<null>) => {
        state={
            strId:'',
            strToken:''
        };
    },
  },
});

export const { loginSession, logoutSession } = sessionSlice.actions;
