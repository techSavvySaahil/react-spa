import React, { Component } from 'react';
import '../styles/vendors/font-awesome/css/font-awesome.min.css'

class LoginModal extends Component {
	constructor() {
		super();
		this.state = {
			login: true
		};
		this.changeView = (login) => {
			this.setState({login});
		}
		this.renderLogin = ()=> {
			return(
				<div className="login-wrap">
					<div className="login-tabs">
						<div className="active-tab">Login</div>
						<div onClick={()=>{this.changeView(false)}}>Sign Up</div>
					</div>
					<div className="user-info">
						<input placeholder="Email" /><br />
						<input placeholder="Password" /><br />
						<button>Login</button>
					</div>
					<div className="user-sso">
						<div>Continue with</div>
						<div>
							<i className="fa fa-facebook fb" aria-hidden="true"></i>
							<i className="fa fa-linkedin-square linkedin"></i>
							<i className="fa fa-google-plus google-p"></i>
						</div>
					</div>
					<div className="change-view">Don't have an account? <a onClick={()=>{this.changeView(false)}}>Sign Up</a></div>
				</div>
			)
		};
		this.renderSignup = ()=> {
			return(
				<div className="login-wrap">
					<div className="login-tabs">
						<div onClick={()=>{this.changeView(true)}}>Login</div>
						<div className="active-tab">Sign Up</div>
					</div>
					<div className="user-info">
						<input placeholder="Name" /><br />
						<input placeholder="Password" /><br />
						<input placeholder="Confirm Password" /><br />
						<input placeholder="Email" /><br />
						<button>Sign up</button>
					</div>
					<div className="user-sso">
						<div>Continue with</div>
						<div>
							<i className="fa fa-facebook fb" aria-hidden="true"></i>
							<i className="fa fa-linkedin-square linkedin"></i>
							<i className="fa fa-google-plus google-p"></i>
						</div>
					</div>
					<div className="change-view">Already have an account? <a onClick={()=>{this.changeView(true)}}>Login</a></div>
				</div>
			)
		}
	}
	render() {
		if(this.state.login) {
			return this.renderLogin();
		}
		else {
			return this.renderSignup();
		}
	}
}

export default LoginModal;