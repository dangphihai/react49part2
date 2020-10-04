import {applyMiddleware, combineReducers, createStore} from 'redux';
import QuanLyPhimReducer from './reducers/QuanLyPhimReducer'
import reduxThunk from 'redux-thunk';
import QuanLyNguoiDungReducer from './reducers/QuanLyNguoiDungReducer'


const rootReducer = combineReducers({
    //reducer khai báo tại đây
    QuanLyPhimReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));


export default store;

