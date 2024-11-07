import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import roleData from '../data/roles.json'; 

interface RoleState {
  role: string;
}

const initialState: RoleState = {
  role: roleData[0]
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action:PayloadAction<number>) => {
        const roleNum = roleData[action.payload]
        if (roleNum) {
            state.role = roleNum ;
          }
    }
  }
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;
