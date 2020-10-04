import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { dangNhapApiAction } from '../../redux/actions/QuanLyNguoiDungAction'

export default function Login(props) {

    let history = useHistory()

    let dispatch = useDispatch();
    // const [state, setState] = useState({
    //     userLogin: {
    //         userName: '',
    //         password: ''
    //     }
    // });

    const [userLogin, setUserLogin] = useState({
        userName:'',
        password:''
    })
    console.log(userLogin)
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserLogin({
            ...userLogin,
            [name]:value
        })
    }

    const login = (e) => {
        e.preventDefault(); // Ngăn sự kiện sau khi submit reload lại trang 
        // Kiểm tra userName, password = cybersoft => chuyển về trang trước đó, ngược lại báo lỗi
        // if (userLogin.userName === 'cybersoft' && userLogin.password === 'cybersoft') {
            // props.history.goBack(); chuyển hướng về trang trước đó
            // props.history.push('/home') // chuyển hướng về trang Home: Home -> Log in -> Home: back -> to Log in
            // props.history.replace('/home') // thay đổi thành route tương ứng, dùng cho những trang nhập OTP Contact -> Log in -> Home: back -> Contact 

            // Gọi api đăng nhập
            dispatch(dangNhapApiAction(userLogin, history))
        // } else {
            // alert('Log in failed!')
        // }
    }


    return (
        <form className="container" onSubmit={login}>
            <h3 className="display-4 text-center">Log In</h3>
            <div className="form-group">
                <p>User name:</p>
                <input name="userName" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <p>Password:</p>
                <input name="password" type="password" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submit">Log In</button>
            </div>
        </form>
    )
}
