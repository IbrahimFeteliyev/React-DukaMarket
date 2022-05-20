import { configureStore} from '@reduxjs/toolkit';
import daysSlice from '../reducers/daysSlice';

export default configureStore({

    reducer: {
        days: daysSlice,
    }

})  