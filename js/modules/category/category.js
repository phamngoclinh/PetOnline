import { Container, Content, Header, InputGroup, Input, Icon, Button, Text} from 'native-base';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Modal,
  Image
} from 'react-native';

export default class Category extends Component {
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

    goToBack = () => {
      this.props.navigator.pop();
   }

   goToDetail = () => {
      this.props.navigator.push({
      	name : "Detail",
      	title : "Detail"
      });
   }

  	render() {
	    return (
	      	<Container>
	      		<Content>
			      	<Text>Category page....</Text>
			      	<Button onPress = {this.goToBack}>Go to back</Button>
			      	<Button onPress = {this.goToDetail}>Go to detail</Button> 
		      	</Content>
	      	</Container>
	    );
  	}
}

AppRegistry.registerComponent('Category', () => Category);