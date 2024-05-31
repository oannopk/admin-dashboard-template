import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import userReducer from './userSlice'

const rootReducer = combineReducers({
  user: userReducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch: () => AppDispatch = useDispatch
