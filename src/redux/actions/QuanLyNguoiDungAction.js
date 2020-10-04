import axios from 'axios'
import { DOMAIN, TOKEN, USER_LOGIN } from '../../utility/ConfigWeb'

export const dangNhapApiAction = (userLogin, history) => {
    return async dispatch => {
        try {
            let { data, status } = await axios({
                url: DOMAIN + '/api/quanlynguoidung/dangnhap',
                method: 'post',
                data: {
                    taiKhoan: userLogin.userName,
                    matKhau: userLogin.password
                }
            });
            // Sau khi gọi api => dispatch lên redux
            if (status === 200) {
                dispatch({
                    type: "DANG_NHAP",
                    userLogin: data
                });
                // Lưu vào local storage
                localStorage.setItem(USER_LOGIN, JSON.stringify(data));
                localStorage.setItem(TOKEN, data.accessToken)

                // history.push("/");
                history.goBack();
            }
        } catch (err) {
            console.log(err.response.data)
        }

    }
}