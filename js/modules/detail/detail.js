import { Container, Content, Header, InputGroup, Input, Icon, Button, Text} from 'native-base';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Modal,
  Image
} from 'react-native';

export default class Detail extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	        loading: false,
	        is_loading_data: false
	    };
	}

	componentDidMount() {
		let _this = this;
	}

	componentWillMount() {
		let _this = this;
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

  	render() {
	    return (
	      	<Container>
	      		<Content>
			      	<Text>Detail page....</Text>
			      	<Button onPress = {this.goToBack}>Go to back</Button>
		      	</Content>
	      	</Container>
	    );
  	}
}

AppRegistry.registerComponent('Detail', () => Detail);