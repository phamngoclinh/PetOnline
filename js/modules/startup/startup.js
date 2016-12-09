import { Container, Content, Text} from 'native-base';
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

		_this.props.setParentState({
			currentPage : 'homepage'
		});
	}

	componentWillMount() {
		let _this = this;

		_this.props.setParentState({
			currentPage : 'homepage'
		});
	}

	loadingData() {
		let that = this;
        that.setState({
        	is_loading_data: true
        })
    }

  	render() {
	    return (
	      	<Content>
		      	<Text>Loading page....</Text>
	      	</Content>
	    );
  	}
}

AppRegistry.registerComponent('Startup', () => Startup);