// store.js
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import questionApi from '@/entities/question/api/questionApi';
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(questionApi.middleware),
});

export default store;
