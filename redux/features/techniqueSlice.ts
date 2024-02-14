import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import ITechnique from '@/interfaces/data';



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

export const fetchTechniques = createAsyncThunk('techniques/fetchTechniques', async () => {
  try {
    const response = await axios.get<ITechnique[]>('http://localhost:3000/api/techniques');
    return response.data;
  } catch (error:any) {
    console.log(error.message)
  }
 
});

export const addTechnique = createAsyncThunk('techniques/addTechnique', async (newTechnique: ITechnique) => {
  try {
    const response = await axios.post<ITechnique>('http://localhost:3000/api/techniques', newTechnique);
    return response.data;
  } catch (error:any) {
    console.log(error.message)
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
       state.techniques.push(action.payload);
})
.addCase(addTechnique.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.payload as string; // veya action.error.message
});

  },
});

export const selectTechniques = (state: any) => state.techniques.techniques;
export const selectTechniquesStatus = (state: any) => state.techniques.status;
export const selectTechniquesError = (state: any) => state.techniques.error;

export default techniquesSlice.reducer;
