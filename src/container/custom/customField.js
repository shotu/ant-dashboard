import React, { Component } from 'react'

class CustomField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fields: [
                { type: 'text', name: 'name' },
                { type: 'email', name: 'email' },
                { type: 'number', name: 'phone' }
            ]
        }
    }

    render() {
        const renderFields = this.state.fields.map((field, index) => {
            return (
                <input type={field.type} name={field.name} placeholder={field.name} />
            )
        })
        return (
            <div>
                <h2>CustomField Component</h2>
                {renderFields}
            </div>
        )
    }
}
export default CustomField