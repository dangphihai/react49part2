import axios from 'axios';
import { LAY_CHI_TIET_PHIM, LAY_DANH_SACH_PHIM } from '../constants/QuanLyPhimConstant';

// Action có 2 loại
// + Action bình thường









// + Action async (các action dùng để gọi api)
// export const layDanhSachPhimAPIAction = () => {
//     // Thay vì return về object => middleware thunk cho phép return về 1 function có tham số là hàm dispatch
//     return dispatch => {
//         axios({
//             url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09',
//             method: 'GET'
//         }).then(res => {
//             console.log('ket qua', res.data);
//             // dispatch lần 1 tại component để gọi action này thực thi
//             // dispatch lần 2 sau khi có kết quả từ api lấy dữ liệu dispatch lên reducer
//             dispatch({
//                 type: LAY_DANH_SACH_PHIM,
//                 dsPhim: res.data
//             })

//         }).catch(err => {
//             console.log(err.response.data);
//         })
//     }
// }

export const layDanhSachPhimAPIAction = () => {
    // Thay vì return về object => middleware thunk cho phép return về 1 function có tham số là hàm dispatch
    return async dispatch => {
        const { data } = await axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });
        dispatch({
            type: LAY_DANH_SACH_PHIM,
            dsPhim: data
        })
    }
}

export const layChiTietPhimAction = (maPhim) => {
    return async dispatch => {
        const { data } = await axios({
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET'
        });
        dispatch({
            type: LAY_CHI_TIET_PHIM,
            chiTietPhim: data
        })
    }
}