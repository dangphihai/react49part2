import React, { Component } from 'react'
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Button size="large" danger>abc</Button>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large">
          Download
        </Button>
            </div>
        )
    }
}
