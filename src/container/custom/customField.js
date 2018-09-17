import React, { Component } from 'react'
import { Button } from 'antd'
import './customField.css'

class CustomField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ' ',
            email: '',
            phone: '',
            location: '',
            fields: [
                { type: 'text', name: 'name' },
                { type: 'email', name: 'email' },
                { type: 'number', name: 'phone' },
                {
                    type: 'select', name: 'location', options: [
                        'bhubaneswar', 'cuttack', 'berhampur', 'puri'
                    ]
                },
            ]
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            'name': this.state.name,
            'email': this.state.email,
            'phone': this.state.phone,
        })
    }
    render() {
        const renderFields = this.state.fields.map((field, index) => {
            // return (
            if (field.type === 'text') {
                return <input
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    className="custom-field-input"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            }
            if (field.type === 'email') {
                return <input
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    className="custom-field-input"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
            }
            if (field.type === 'number') {
                return <input
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    className="custom-field-input"
                    value={this.state.number}
                    onChange={this.handleChange}
                />
            }
            if (field.type === 'select') {
                return <select
                    key={index}
                    name={field.name}
                    placeholder={field.name}
                    className="custom-field-input"
                    value={this.state.number}
                    onChange={this.handleChange}
                >
                    {field.options.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })}
                </select>
            }
        })
        return (
            <div className="custom-field-wrapper">
                <h2>CustomField Component</h2>
                <form className="">
                    {renderFields}
                    <Button htmltype="submit" type="primary" onClick={this.handleSubmit}>Send</Button>
                </form>
            </div>
        )
    }
}
export default CustomField;