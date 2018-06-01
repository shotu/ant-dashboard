import React, { Component } from 'react';
import './profile.css';
import { Icon, Tooltip, Input } from 'antd';
import SettingPopover from '../../components/popover/settingPopover';
const Search = Input.Search;
class ProfileHeader extends Component {
    render() {
        return (
            <div className="profile-header">
                <div className="view-icons">
                    <Tooltip title="Grid View">
                        <Icon
                            style={{ fontSize: 25, cursor: 'pointer' }}
                            type="appstore-o"
                            onClick={() => console.log('grid view clicked')}
                        />
                    </Tooltip>
                    <Tooltip title="List View">
                        <Icon
                            style={{ fontSize: 25, marginLeft: '0.5rem', cursor: 'pointer' }}
                            type="profile"
                            onClick={() => console.log('list view clicked')}
                        />
                    </Tooltip>
                </div>
                <div className="setting-icons">
                    <Search
                        placeholder="Search Profile"
                        onSearch={value => console.log(value)}
                        style={{ width: 200, marginRight: '1rem' }}
                    />
                    <SettingPopover />
                </div>
            </div>
        )
    }
}
export default ProfileHeader;