import { Container, Content, Header, Title, InputGroup, Input, Icon, Button, Text, Grid, Col} from 'native-base';
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
	        is_loading_data: false,
	        is_search: false
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

    openSearch = () => {
    	this.setState({
    		is_search: true
    	});
    }

    goToBack = () => {
      this.props.navigator.pop();
   }

   goToDetail = () => {
      this.props.navigator.push({
      	name : "Detail",
      	title : "Detail",
      	passProps : {
      		data: '1212122',
      		category: 'cat'
      	}
      });
   }

  	render() {
	    return (
	      	<Container style={{backgroundColor: '#ffffff'}}>
	      		{
	      			this.state.is_search ? 
	      			(
	      				<Header searchBar rounded>
		                    <InputGroup>
		                        <Icon name="ios-search" />
		                        <Input placeholder="Search" />
		                        <Icon name="ios-people" />
		                    </InputGroup>
		                    <Button transparent>
		                        Search
		                    </Button>
		                </Header>
					)
					: null
	      		}

				<Header>
                    <Button transparent onPress = {this.goToBack}>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    
                    <Title>Category</Title>

                    <Button transparent onPress = {this.openSearch}>
                        <Icon name='ios-search' />
                    </Button>

                </Header>
                	
				<Content>
			      	<Grid>
                        <Col style={{ backgroundColor: '#D954D7'}}>
                        	<Button transparent style={{height: 200, width: null, alignSelf: 'center'}}>
	                            CATEGORY #1
	                            <Icon name='ios-contact-outline' />
	                        </Button>
	                        <Button transparent style={{height: 200, width: null, alignSelf: 'center'}}>
	                            CATEGORY #3
	                            <Icon name='ios-contact-outline' />
	                        </Button>
	                        <Button transparent style={{height: 200, width: null, alignSelf: 'center'}}>
	                            CATEGORY #5
	                            <Icon name='ios-contact-outline' />
	                        </Button>
                        </Col>
                        <Col style={{ backgroundColor: '#D93735'}}>
                        	<Button transparent style={{height: 200, width: null, alignSelf: 'center'}}>
	                            CATEGORY #2
	                            <Icon name='ios-contact-outline' />
	                        </Button>
	                        <Button transparent style={{height: 200, width: null, alignSelf: 'center'}}>
	                            CATEGORY #4
	                            <Icon name='ios-contact-outline' />
	                        </Button>
	                        <Button transparent style={{height: 200, width: null, alignSelf: 'center'}}>
	                            CATEGORY #6
	                            <Icon name='ios-contact-outline' />
	                        </Button>
                        </Col>
                    </Grid>

					<Text>Category page....Data: {this.props.data}</Text>
			      	<Button onPress = {this.goToBack}>Go to back</Button>
			      	<Button onPress = {this.goToDetail}>Go to detail</Button>

				</Content>
	      	</Container>
	    );
  	}
}

AppRegistry.registerComponent('Category', () => Category);