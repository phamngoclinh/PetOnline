import { Container, Header, Footer, FooterTab, Tabs, Title, List, ListItem, InputGroup, Spinner, Card, CardItem, Input, Icon, Button, Content, Text, Thumbnail, Badge  } from 'native-base';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Modal,
  Image
} from 'react-native';

export default class Homepage extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	    	pipePage: [],
	    	currentPage: 'startup',
	    	results: {},
	    	modalVisible: false,
	    	selectedItem: {},
	    	search: '',
	        loading: false,
	        is_loading_data: false
	    };

	    this.search = this.search.bind(this);
	    this.setModalVisible = this.setModalVisible.bind(this);
	    this.setParentState = this.setParentState.bind(this);
	}

	componentDidMount() {

	}

	setParentState(stateOjbect) {
		this.setState(stateObject);
	}

  	search() {
	    // Set loading to true when the search starts to display a Spinner        
	    this.setState({            
	        loading: true,
	        is_loading_data: true        
	    });

	    var that = this;        
	    return fetch('https://api.github.com/search/repositories?q='+this.state.search, {
	    	method: 'get'
	    })            
	    .then((response) => response.json())            
	    .then((responseJson) => {      
	        // Store the results in the state variable results and set loading to
	        that.setState({
	        	results: responseJson,
	        	is_loading_data: false
	        });
	    }) 
	    .catch((error) => {
	        that.setState({                    
		        loading: false
		    });
	        console.error(error);
	    });    
	}

	setModalVisible(is_show, item) {
		this.setState({
			modalVisible : is_show,
			selectedItem : item
		});
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

    goToStartup = () => {
      this.props.navigator.pop({
         name: 'Startup',
         title: 'Startup'
      });
   }

	goToCategory = () => {
		this.props.navigator.push({
			name: 'Category',
			title: 'Category'
		});
	}

	goToDetail = () => {
		this.props.navigator.push({
			name: 'Detail',
			title: "Detail",
			index: 2,
			passProps: {
		        data: "12441212",
		    }
		});
	}

  	render() {
	    return (
	      	<Container style={{backgroundColor: '#ffffff'}}>
	      		{
	      			/*
	      			<Header searchBar rounded>                            
				    <InputGroup>                        
				        <Icon name="ios-search" />                        
				        <Input placeholder="Search..." value={this.state.search}  onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.search()}/>                    
				    </InputGroup>                    
				    <Button transparent onPress={()=>this.search()}>Go</Button>                
				</Header>
	      			*/
	      		}

				<Header>
                    <Button transparent onPress = {this.props.openMenu}>
                        <Icon name='ios-menu' />
                    </Button>
                    
                    <Title>Home</Title>

                </Header>

				<Content>
					{
						/*
						<Tabs>
		                    <View tabLabel='One' />
		                    <View tabLabel='Two' />
		                </Tabs>
						*/
					}
					<Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={require('../../../images/avatar.png')} />
                            <Text onPress = {this.goToDetail}>Kênh rao bán Pet số 1 Việt Nam</Text>
                            <Text note>Phạm Ngọc Linh</Text>
                        </CardItem>

                        <CardItem cardBody> 
                            <Image style={{ resizeMode: 'cover', width: null }} source={require('../../../images/thumbnail.jpg')} /> 
                            <Text>
                                CHỢ THÚ CƯNG Online là nơi giúp các bạn yêu Thú Cưng có thể tìm được các bé thú đánh yêu nhất. Page được lập không vì mục đích lợi nhuận.
                            </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>636 likes</Text>
                            </Button>

                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>742 shares</Text>
                            </Button>
                        </CardItem>
                   </Card>

                   <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={require('../../../images/avatar.png')} />
                            <Text onPress = {this.goToDetail}>Kênh rao bán Pet số 1 Việt Nam</Text>
                            <Text note>Phạm Ngọc Linh</Text>
                        </CardItem>

                        <CardItem cardBody> 
                            <Image style={{ resizeMode: 'cover', width: null }} source={require('../../../images/thumbnail.jpg')} /> 
                            <Text>
                                CHỢ THÚ CƯNG Online là nơi giúp các bạn yêu Thú Cưng có thể tìm được các bé thú đánh yêu nhất. Page được lập không vì mục đích lợi nhuận.
                            </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>636 likes</Text>
                            </Button>

                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>742 shares</Text>
                            </Button>
                        </CardItem>
                   </Card>

                   <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={require('../../../images/avatar.png')} />
                            <Text onPress = {this.goToDetail}>Kênh rao bán Pet số 1 Việt Nam</Text>
                            <Text note>Phạm Ngọc Linh</Text>
                        </CardItem>

                        <CardItem cardBody> 
                            <Image style={{ resizeMode: 'cover', width: null }} source={require('../../../images/thumbnail.jpg')} /> 
                            <Text>
                                CHỢ THÚ CƯNG Online là nơi giúp các bạn yêu Thú Cưng có thể tìm được các bé thú đánh yêu nhất. Page được lập không vì mục đích lợi nhuận.
                            </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>636 likes</Text>
                            </Button>

                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>742 shares</Text>
                            </Button>
                        </CardItem>
                   </Card>

                   <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={require('../../../images/avatar.png')} />
                            <Text onPress = {this.goToDetail}>Kênh rao bán Pet số 1 Việt Nam</Text>
                            <Text note>Phạm Ngọc Linh</Text>
                        </CardItem>

                        <CardItem cardBody> 
                            <Image style={{ resizeMode: 'cover', width: null }} source={require('../../../images/thumbnail.jpg')} /> 
                            <Text>
                                CHỢ THÚ CƯNG Online là nơi giúp các bạn yêu Thú Cưng có thể tìm được các bé thú đánh yêu nhất. Page được lập không vì mục đích lợi nhuận.
                            </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>636 likes</Text>
                            </Button>

                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>742 shares</Text>
                            </Button>
                        </CardItem>
                   </Card>

					<List dataArray={this.state.results.items} renderRow={(item) =>               
					    <ListItem button onPress={()=>this.setModalVisible(true, item)}> 
					        <Thumbnail square size={80} source={{uri: item.owner.avatar_url}} />
					        <Text>Name: <Text style={{fontWeight: '600', color: '#46ee4b'}}>{item.name}</Text></Text>
					        <Text style={{color:'#007594'}}>{item.full_name}</Text>    
					        <Text note>Score: <Text note style={{marginTop: 5}}>{item.score}</Text></Text>    
					    </ListItem>                            
					} />

					{this.state.is_loading_data ? <Spinner color='blue' visible={this.state.is_loading_data} /> : null}

				</Content>
	      	</Container>
	    );
  	}
}

AppRegistry.registerComponent('Homepage', () => Homepage);