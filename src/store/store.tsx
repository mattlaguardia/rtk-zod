import { configureStore } from '@reduxjs/toolkit';
import api from '../api/api';
// import normalize from 'json-api-normalizer';

// Can potentially apply json API data here
const myCustomMiddleware = (store: any) => (next: any) => (action: any) => {
  // if (action?.payload?.data) {
  //   const t = normalize(action.payload);
  //   console.log(t);
  //   action.payload = t;
  // };
  next(action);
}

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => ([
    ...getDefaultMiddleware({serializableCheck: true}),
    api.middleware,
    myCustomMiddleware
  ])
});

export default store;
