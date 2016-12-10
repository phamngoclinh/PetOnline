import { Container, Content, Header, InputGroup, Input, Icon, Button, Text} from 'native-base';
import React, { Component } from 'react';
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

    goToHome = () => {
      this.props.navigator.push({
         name: 'Home',
         title: 'Home',
         openMenu: this.openMenu
      });
   }

  	render() {
	    return (
	      	<Container>
	      		<Content>
			      	<Text>Loading page....</Text>
			      	<Button onPress = {this.goToHome}>Go to home</Button> 
		      	</Content>
	      	</Container>
	    );
  	}
}

AppRegistry.registerComponent('Startup', () => Startup);