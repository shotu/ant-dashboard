import React, { Component } from 'react'
import { Tabs, Icon, Button, List, Checkbox } from 'antd';
import PastNotification from '../../container/notification/pastNotification';
import PresentNotification from '../../container/notification/presentNotification';
import FutureNotification from '../../container/notification/futureNotification';

const TabPane = Tabs.TabPane;

class NotificationTab extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="2" style={{ width: 400 }}>
                    <TabPane tab={<span style={{ color: 'skyblue' }}><Icon type="team" />Yesterday</span>} key="1">
                        <PastNotification />
                    </TabPane>
                    <TabPane tab={<span style={{ color: 'lightgreen' }}><Icon type="trophy" />Today</span>} key="2">
                        <PresentNotification />
                    </TabPane>
                    <TabPane tab={<span style={{ color: 'tomato' }}><Icon type="line-chart" />Tommorow</span>} key="3">
                        <FutureNotification />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default NotificationTab;