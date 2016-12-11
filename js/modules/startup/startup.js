import { Container, Content, Header, InputGroup, Input, Icon, Button, Text} from 'native-base';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  AppRegistry,
  StyleSheet,
  View,
  Modal,
  Image
} from 'react-native';

export default class Startup extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	        loading: false,
	        is_loading_data: false
	    };

	    this.goToSignup = this.goToSignup.bind(this);
	    this.goToHome = this.goToHome.bind(this);
	    this.goToLogin = this.goToLogin.bind(this);

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

    openMenu = () =>{
    	alert("Menu button pressed!")
    }

    // go to Home without login or signup
    // for testing purpose.
    goToHome = () => {
      	this.props.navigator.push({
         	name: 'Home',
         	title: 'Home',
         	openMenu: this.openMenu
      	});
   	}

   	// go to Signup screen
   	goToSignup = () => {
      	this.props.navigator.push({
         	name: 'Signup',
         	title: 'Signup',
         	openMenu: this.openMenu
      	});
   	}

   	// go to Login screen
   	goToLogin = () => {
   		this.props.navigator.push({
   			name: 'Login',
   			title: 'Login',
   			openMenu: this.openMenu
   		})	
   	}

  	render() {
	    return (
	      	<Container>
	      		<Content>
	      			<Grid>
	      				<Row>
	      					<Content>
	      						<Text> Pet Online Splash Screen</Text>
	      						<Text> Logo... </Text>
	      					</Content>
	      				</Row>
			      		<Row>
			      			<Content>
			      				<Button style = {{ alignSelf: 'center', marginTop: 10, marginBottom: 10 }} onPress = {this.goToSignup}> Singup </Button> 
			      				<Button style = {{ alignSelf: 'center', marginTop: 10, marginBottom: 10 }} onPress = {this.goToLogin}> Login </Button> 
			      				<Button style = {{ alignSelf: 'center', marginTop: 10, marginBottom: 10 }} onPress = {this.goToHome}> Continue </Button> 
			      			</Content>
	      				</Row>
			      	</Grid>
		      	</Content>
	      	</Container>
	    );
  	}
}

AppRegistry.registerComponent('Startup', () => Startup);