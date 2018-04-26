import React, { Component } from 'react'
import moment from 'moment';
import { Field } from 'redux-form';
import { Input, DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class EventForm extends Component {
    constructor(props) {
        super(props)

        this.renderInput = this.renderInput.bind(this);
    }

    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        return (
            <div>
                <Input
                    placeholder={label}
                    value={this.props.start || null}
                    {...input}
                    {...custom}
                />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }
    render() {
        console.log(this.props.start)
        return (
            <div>
                <DatePicker
                    defaultValue={this.props.start
                        ? moment(this.props.start, 'YYYY-MM-DD')
                        : moment('2018-04-17T18:30:00.000Z', 'YYYY-MM-DD')} />
                <Field
                    name="title"
                    label="Title"
                    component={this.renderInput} />
                <Field
                    name="user"
                    label="User"
                    component={this.renderInput} />
                <Field
                    name="description"
                    label="Description"
                    component={this.renderInput} />

            </div>
        )
    }
}
export default EventForm;