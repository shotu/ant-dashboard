import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";
import { getLatLng, geocodeByAddress } from 'react-places-autocomplete';
import TextInput from '../../components/common/forms/textInput';
import PlaceInput from '../../components/common/forms/placeInput';
import UploadInput from '../../components/common/forms/uploadInput';
import GoogleMap from '../../components/google/googleMap';
import SwitchInput from "../../components/common/forms/switchInput";

class ReuseForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            latLng: null
        }
    }
    onSubmit = values => console.log(values)

    handleSelect = address => {
        console.log(this.props, address)
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng)
                this.setState({
                    latLng
                })
            })
            .then(() => this.props.change('location', address))
            .catch(error => console.error('Error', error));
    };
    renderInput = ({ input, meta, width, label, ...custom }) => (
        <div style={{ width }}>
            <TextInput  {...input} {...custom} />
        </div>
    )
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name="field1"
                        component={this.renderInput}
                        label='Event'
                        placeholder="Enter Event"
                        width={400}
                    />
                    <br />
                    <Field
                        name="location"
                        component={PlaceInput}
                        label='Enter Event Location'
                        width={400}
                        onSelect={this.handleSelect} />
                    <Field
                        name="switch"
                        component={SwitchInput}
                    />
                    <Field
                        name="image"
                        component={UploadInput}
                    />
                    <Button type="primary" htmlType="submit" >Submit</Button>
                </form>
                <div style={{ marginTop: '0.5rem' }}>
                    <GoogleMap latLng={this.state.latLng} />
                </div>
            </div>
        )
    }
}
ReuseForm = reduxForm({
    form: 'reuseForm'
})(ReuseForm)

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ReuseForm);