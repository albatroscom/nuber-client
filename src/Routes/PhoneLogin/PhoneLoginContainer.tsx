import React from 'react';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { RouteComponentProps } from 'react-router';
import { toast } from 'react-toastify';

interface IState {
    countryCode: string;
    phoneNumber: string;
}

class PhoneLoginContainer extends React.Component<RouteComponentProps<any>, IState> {
    public state = {
        countryCode: "+82",
        phoneNumber: ""
    };
    public render(){ 
        const { countryCode, phoneNumber } = this.state;
        return (
            <PhoneLoginPresenter countryCode={countryCode} phoneNumber={phoneNumber} onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        );
    }
    public onInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (event) => {
        const { target: {name, value} } = event;
        this.setState({
            [name]: value
        } as any);
    }

    public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
        const { countryCode, phoneNumber } = this.state;
        const isValid = /^[+]*[]{0,1}[0-9]{1,4}[]{0,1}[-\s\./0-9]*$/g.test(
            `${countryCode}${phoneNumber}`
        );
        // tslint:disable-next-line
        // console.log(isValid);
        // console.log(countryCode, phoneNumber);
        if(isValid){
            toast.success("success");
        } else {
            toast.warn("Please write a valid phone number!");
        }
    }
}

export default PhoneLoginContainer;