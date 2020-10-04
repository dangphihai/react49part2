import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { datVeActionAPI, layDanhSachGheAPI } from '../../redux/actions/QuanLyPhongVeAction';
import { TOGGLE_GHE } from '../../redux/constants/QuanLyPhongVeConstant';

export default function Booking(props) {

    const dispatch = useDispatch();
    const { maLichChieu } = useParams();
    const { danhSachGhe } = useSelector((state) => state.QuanLyPhongVeReducer);

    useEffect(() => {
        // call api
        dispatch(layDanhSachGheAPI(maLichChieu));
    }, []);

    const handleClassName = (ghe) => {
        if (ghe.daDat) {
            // đã đặt
            return "btn bg-dark text-white m-2"
        } else {
            if (ghe.dangChon) {
                // đang chọn
                return "btn bg-info text-white m-2"
            } else {
                return "btn bg-dark text-white m-2"
            }
        }
    }

    const handleBooking = () => {
        // call api
        let gheDaChon = danhSachGhe.filter((ghe) => ghe.dangChon);
        gheDaChon = gheDaChon.map((ghe) => ({
            maGhe: ghe.maGhe,
            giaVe: ghe.giaVe
        }));
        console.log(gheDaChon);
        dispatch(datVeActionAPI(maLichChieu, gheDaChon));
    }

    const renderDanhSachGhe = () => {
        return danhSachGhe.map((ghe, index) => {
            return <button
                key={index}
                className={handleClassName(ghe)}
                disabled={ghe.daDat}
                onClick={() => {
                    dispatch({
                        type: TOGGLE_GHE,
                        ghe: ghe
                    })
                }}
            >{ghe.tenGhe}</button>;
        });
    }

    if (localStorage.getItem('userLogin')) {
        return (
            <div className="text-center">
                <h2>Danh Sách Ghế</h2>
                <div>
                    {renderDanhSachGhe()}
                </div>
                <div>
                    <button className="btn btn-success" onClick={handleBooking}>
                        ĐẶT GHẾ
                    </button>
                </div>
            </div>
        )
    }
    return <Redirect to='/login' />
}
