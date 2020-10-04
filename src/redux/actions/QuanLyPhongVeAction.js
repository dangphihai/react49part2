import axios from 'axios'
import { LAY_DANH_SACH_GHE } from '../constants/QuanLyPhongVeConstant';

export const layDanhSachGheAPI = (maLichChieu) => {
    return (dispatch) => {
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method: 'GET'
        }).then((result)=>{
            console.log(result);
            dispatch({
                type: LAY_DANH_SACH_GHE,
                danhSachGhe: result.data.danhSachGhe
            });
        }).catch((err)=> {
            console.log(err);
        });
    }
}

export const datVeActionAPI = (maLichChieu, danhSachVe) => {
    return dispatch => {
        const {taiKhoan, accessToken} = JSON.parse(localStorage.getItem("userLogin"));

        axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
            method: 'POST',
            data: {
                maLichChieu,
                danhSachVe,
                taiKhoanNguoiDung: taiKhoan
              },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((result)=> {
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}