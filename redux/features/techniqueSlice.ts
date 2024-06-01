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
//const endPoint = "https://megatexnika-nine.vercel.app";
//const endPoint = "http://localhost:3000";
export const fetchTechniques = createAsyncThunk<ITechnique[],void>('techniques/fetchTechniques', async () => {
  try {
    const response= await fetch(`/api/techniques`,{cache:"no-cache"});
    const data = await response.json();
    return data;
  } catch (error:any) {
    console.log(error.message);
    throw error;
  }
});

export const addTechnique = createAsyncThunk('techniques/addTechnique', async (newTechnique: ITechnique) => {
  try {
    const response = await axios.post<ITechnique>(`/api/techniques`, newTechnique);
    return response.data;
  } catch (error:any) {
    console.log(error.message);
    throw error;
  }
});
export const updateTechnique = createAsyncThunk('techniques/updateTechnique', async (updatedTechnique: ITechnique) => {
  try {
    // const { _id, ...rest } = updatedTechnique;
    // console.log("rest...",rest)
    const response = await axios.put<ITechnique>(`/api/techniques`, updatedTechnique);
    return response.data;
  } catch (error:any) {
    console.log(error.message);
    throw error;
  }
});
export const deleteTechnique = createAsyncThunk('techniques/deleteTechnique', async (_id: any) => {
  console.log("idmfdsl",_id);
 
  try {
    //const response =  await axios.delete(`/api/techniques`,_id);
   
    const response = await axios.delete(`/api/techniques/${_id}`);

    
    return response.data;
  } catch (error:any) {
    console.log(error);
    console.log("error is in try");

    throw error;
  }
});

const techniquesSlice:any = createSlice({
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
      })
      .addCase(updateTechnique.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.techniques.findIndex(tech => tech._id === action.payload._id);
        if (index !== -1) {
          //state.techniques[index] = action.payload;
          state.techniques = state.techniques.filter(tech => tech._id !== action.payload._id);
           state.techniques = [...state.techniques,action.payload]
           //state.techniques.push(action.payload);

          
        }
      })
      .addCase(deleteTechnique.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.techniques = state.techniques.filter(tech => tech._id !== action.payload);
      })
  },
});

export const selectTechniques = (state: any) => state.techniques.techniques;
export const selectTechniquesStatus = (state: any) => state.techniques.status;
export const selectTechniquesError = (state: any) => state.techniques.error;

export default techniquesSlice.reducer;
