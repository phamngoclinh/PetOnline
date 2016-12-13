import { Container, Content, Header, Footer, FooterTab, Badge, InputGroup, Input, Icon, Button, Text, Title, Card, CardItem, Thumbnail} from 'native-base';
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
	      	<Container style={{backgroundColor: '#ffffff'}}>
	      		<Header>
                    <Button transparent onPress = {this.goToBack}>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    
                    <Title>{this.props.data}</Title>
                </Header>
	      		<Content>
                   <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={require('../../../images/avatar.png')} />
                            <Text>NativeBase</Text>
                            <Text note>April 15, 2016</Text>
                        </CardItem>

                        <CardItem> 
                        	<Text>
                                The peer dependencies included from any npm package does not automatically get installed. Your application will need to depend on it explicitly. NativeBase includes React Native Vector Icons as one of its peer dependency. So here we help you with the setup.
                            </Text>
                            <Image source={require('../../../images/thumbnail.jpg')} /> 
                            
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>

                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>

                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>
                        </CardItem>

                        <CardItem>
                            <Thumbnail source={require('../../../images/avatar.png')} />
                            <Text>NativeBase</Text>
                            <Text note>April 15, 2016</Text>
                        </CardItem>

                        <CardItem> 
                        	<Text>
                                The peer dependencies included from any npm package does not automatically get installed. Your application will need to depend on it explicitly. NativeBase includes React Native Vector Icons as one of its peer dependency. So here we help you with the setup.
                            </Text>
                            <Image source={require('../../../images/thumbnail.jpg')} /> 
                            
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>

                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>

                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>
                        </CardItem>
                   </Card>


			      	<Text>Detail page....</Text>
			      	<Button onPress = {this.goToBack}>Go to back</Button>
		      	</Content>
	      	</Container>
	    );
  	}
}

AppRegistry.registerComponent('Detail', () => Detail);