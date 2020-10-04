import React, { Component } from 'react'
import Login from '../Login/Login'
import ModalHOC from './ModalHOC'

export default class DemoHOC extends Component {
    render() {
        // this.props.children dùng để nhận truyền giá trị từ cha sang con thông qua phần innerHTML của thẻ component (Thường dùng để truyền giao diện)
        return (
            <div>
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    Open login
                </button>

                <ModalHOC Component={Login} />
            </div>

        )
    }
}
