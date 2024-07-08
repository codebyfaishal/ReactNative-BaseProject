import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './dataReducers';

const rootReducer = combineReducers({
  data: dataReducer,
  // Tambahkan reducer lain di sini jika diperlukan
});

export default rootReducer;
