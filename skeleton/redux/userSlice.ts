import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  username: '',
}

export const login = createAsyncThunk('user/login', async (body: { username: string; password: string }) => {
  try {
    await new Promise((r) => setTimeout(() => r(true), 1000))

    return { username: body.username }
  } catch (error) {
    throw error
  }
})

export const logout = createAsyncThunk('user/logout', async (_) => {
  try {
    return { username: '' }
  } catch (error) {}
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (_, action: PayloadAction<{ username: string }>) => {
        return action.payload
      })
      .addCase(logout.fulfilled, () => {
        return initialState
      })
  },
})

export default userSlice.reducer
