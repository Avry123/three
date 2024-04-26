import { configureStore } from '@reduxjs/toolkit';
import TitleAndMessageSlice from './TitleAndMessageSlice';

export default configureStore({
	reducer: {
        titleAndMessage: TitleAndMessageSlice,
    },
});