import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, List, ListItem, Button, Text, H1} from 'native-base';
import { AppRegistry, StyleSheet, View, Modal, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Login extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
      		loading: false,
      		is_loading_data: false
    	};

    	this.goToResetPassword = this.goToResetPassword.bind(this);
    	this.goToSignUp = this.goToSignUp.bind(this);
    	this.doLogin = this.doLogin.bind(this);
  	}

  	componentDidMount() {
    let _this = this;

		// _this.props.setParentState({
		// 	currentPage : 'homepage'
		// });
	}

	componentWillMount() {
		let _this = this;

		// _this.props.setParentState({
		// 	currentPage : 'homepage'
		// });
	}

	loadingData() {
		let that = this;
    	that.setState({
     		is_loading_data: true
    	})
  	}

  	goToSignUp = () => {
    	this.props.navigator.push({
      		name: 'Signup',
      		title: 'Signup',
      		notify: this.notify
    	});
  	}

  	goToResetPassword = () => {
  		// this is where we using toastAndroid
  	}

  	doLogin = () => {
  		// do login here
  	}




  	render() {
    	return (
      		<Container>
        		<Content>
		          	<Grid>
			            <Row style={{ backgroundColor: '#e6eeff'}}>
			              	<Content> 
			                	<Text >Put Our Icon here !</Text>
			              	</Content>
			            </Row>

			            <Row style={{ backgroundColor: '#e6eeff'}}>
			              	<Content>
			                	<List>
				                  	<ListItem>
					                    <Content>
					                      	<H1>Login Page</H1>
					                    </Content>
				                  	</ListItem>

				                  	<ListItem>
					                    <InputGroup style={{marginTop: 20, marginBottom: 20}}>
					                      	<Icon name="ios-person" />
					                      	<Input style={{height: 40}} placeholder="EMAIL/PHONE" />
					                    </InputGroup>
				                  	</ListItem>

				                  	<ListItem>
					                    <InputGroup style={{marginTop: 20, marginBottom: 20}}>
					                      	<Icon name="ios-unlock" />
					                      	<Input style={{height: 40}} placeholder="PASSWORD" secureTextEntry={true}/>
					                    </InputGroup>
				                  	</ListItem>   

			                  		<Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} onPress={this.doLogin}> Login </Button>
			                  		<Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} onPress={this.goToResetPassword}> Forget password </Button>
			                  		<Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} onPress={this.goToSignUp}> Sign Up </Button>
			                  		
			                	</List>
			              	</Content>
			            </Row>
          			</Grid>
        		</Content>
      		</Container>
    	);
  	}
}

AppRegistry.registerComponent('Login', () => Login);