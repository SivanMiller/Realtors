import {Component} from "react";
import './sign-in.style.css'

class SignIn extends Component {
    render() {
        const {onClickHandler} = this.props;

        return (
            <div>
            <button onClick={onClickHandler}>sign in with google</button>
        </div>);
    }
}

export default SignIn;