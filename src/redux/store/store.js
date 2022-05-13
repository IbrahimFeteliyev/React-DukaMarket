import { configureStore} from '@reduxjs/toolkit';
import daysReducer from '../reducers/daysSlice';

export default configureStore({

    reducer: {
        days: daysReducer
    }

})  