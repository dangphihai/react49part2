import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Thư viện kết nối BE API
import {layDanhSachPhimAPIAction} from '../../redux/actions/QuanLyPhimAction'
import {connect, useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';

function Home(props) {

    // Dùng useSelector thay cho mapStateToProps lấy danh sách phim từ reducer về
    const danhSachPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim)

    // useDispatch thay thế cho this.props.dispatch bên react component
    const dispatch = useDispatch()

    const [dsPhim, setDSPhim] = useState([])

    const getFilm = async () => {

        dispatch(layDanhSachPhimAPIAction())




        // getFilmsAPI()
        // axios({
        //     url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09',
        //     method: 'GET'
        // }).then(res => {
        //     console.log('ket qua', res.data);
        //     // Set lai dsPhim => function render lai (chay lai tat ca voi dsPhim mang gia tri moi)
        //     setDSPhim(res.data)
        // }).catch(err => {
        //     console.log(err.response.data);
        // })
    }

    useEffect(()=> {
        axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        }).then(res => {
            console.log('ket qua', res.data);
            // Set lai dsPhim => function render lai (chay lai tat ca voi dsPhim mang gia tri moi)
            setDSPhim(res.data)
        }).catch(err => {
            console.log(err.response.data);
        })
    },[]) // Tham số thứ 2 useEffect là mảng rỗng => ứng với componentDidMount của react life cycle

    const getFilmsAPI = async () => { // async function là function bất đồng bộ. Khi gọi nó, các hàm tiếp theo vẫn tiếp tục thực hiện
        try {
            let {data, status}  = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09',
                method: 'GET1'
            }); // Lệnh await bắt buộc các lệnh phía sau phải đợi đến khi hàm này thực thi xong thì mới làm tiếp
            console.log(status)
        } catch (error) {
            console.log('loi ne', error)
        }    
    }

    const renderPhim = () => {
        return props.dsPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-white bg-warning">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e) => {
                        e.target.src = 'https://picsum/photos/300/300'
                    }} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                        <NavLink className="btn btn-success" to={`/detail/${phim.maPhim}`}>ĐẶT VÉ</NavLink>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="container">
            <button onClick={getFilm}>Lấy danh sách phim</button>
            <h3 className="text-center">Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}

// Kết nối với rootReducer lấy giá trị state về component
const mapStateToProps = (state) => {
    return {
        dsPhim: state.QuanLyPhimReducer.dsPhim
    }
}

export default connect(mapStateToProps)(Home);