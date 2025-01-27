import {createSlice} from '@reduxjs/toolkit';
import { setAllAdminJobs } from './jobSlice';
const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        applicants:[],
    },
    reducers:{
        setAllApplicants: (state, action) => {
            state.applicants = action.payload;
        }
    }
})
export const {setAllApplicants} = applicationSlice.actions;
export default applicationSlice.reducer;