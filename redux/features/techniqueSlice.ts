import ITechnique from '@/interfaces/data';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AsyncThunkAction } from '@reduxjs/toolkit';


interface TechniquesState {
  techniques: ITechnique[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TechniquesState = {
  techniques: [],
  status: 'idle',
  error: null,
};
const endPoint = "https://megatexnika-nine.vercel.app";
//const endPoint = "http://localhost:3000";
export const fetchTechniques = createAsyncThunk<ITechnique[],void>('techniques/fetchTechniques', async () => {
  try {
    const response = await axios.get<ITechnique[]>(`${endPoint}/api/techniques`);
    return response.data;
  } catch (error:any) {
    console.log(error.message);
    throw error;
  }
});

export const addTechnique = createAsyncThunk('techniques/addTechnique', async (newTechnique: ITechnique) => {
  try {
    const response = await axios.post<ITechnique>(`${endPoint}/api/techniques`, newTechnique);
    return response.data;
  } catch (error:any) {
    console.log(error.message);
    throw error;
  }
});

const techniquesSlice = createSlice({
  name: 'techniques',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTechniques.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTechniques.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.techniques = action.payload;
      })
      .addCase(fetchTechniques.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      })
      .addCase(addTechnique.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.techniques.push(action.payload);
      })
      .addCase(addTechnique.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export const selectTechniques = (state: any) => state.techniques.techniques;
export const selectTechniquesStatus = (state: any) => state.techniques.status;
export const selectTechniquesError = (state: any) => state.techniques.error;

export default techniquesSlice.reducer;
