import { Container, Header, Title, List, ListItem, InputGroup, Spinner, Card, CardItem, Input, Icon, Button, Content, Text, Thumbnail } from 'native-base';
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

    goToStartup = () => {
      this.props.navigator.pop({
         name: 'Startup',
         title: 'Startup'
      });
   }

  	render() {
	    return (
	      	<Container>
	      		<Header searchBar rounded>                            
				    <InputGroup>                        
				        <Icon name="ios-search" />                        
				        <Input placeholder="Search..." value={this.state.search}  onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.search()}/>                    
				    </InputGroup>                    
				    <Button transparent onPress={()=>this.search()}>Go</Button>                
				</Header>

				<Content>
					<Button onPress = {this.goToStartup}>Go to back</Button>
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

// <Modal
// 					    animationType="slide"
// 					    transparent={false}
// 					    visible={this.state.modalVisible}
// 					    onRequestClose={() => {alert("Modal has been closed.")}} >
// 					    <Card style={{paddingTop: 20}}>
// 					        {
// 					        	Object.getOwnPropertyNames(this.state.selectedItem).length===0 ? <View></View> : 
// 					        	<CardItem cardBody style={{justifyContent: 'flex-start'}}>
// 							        <Image source={{uri: this.state.selectedItem.owner.avatar_url}}  />
// 							        <h4> {this.state.selectedItem.name}</h4>
// 							        <Text> Type: <Text>{this.state.selectedItem.owner.type}</Text></Text>
// 							        <Text>Stars: <Text>{this.state.selectedItem.stargazers_count}</Text></Text>
// 									<Text>Language: <Text>{this.state.selectedItem.language}</Text></Text>
// 									<Text>Open Issues: <Text>{this.state.selectedItem.open_issues_count}</Text></Text>
// 							        <Text>Last Update: <Text>{this.state.selectedItem.updated_at.slice(0,10)}</Text></Text>

// 							        <Button danger style={{alignSelf: 'flex-end'}} onPress={() => {
// 							        	this.setModalVisible(!this.state.modalVisible, this.state.selectedItem)
// 							         }}>
// 							            Go Back
// 							        </Button>
// 						        </CardItem>
// 					        }
// 					    </Card>
// 					</Modal>

// <Spinner color='blue' visible={this.state.is_loading_data} />
// fetch(url, {  
//     method: 'post',  
//     headers: {  
//       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
//     },  
//     body: 'foo=bar&lorem=ipsum'  
//   })
//   .then(json)  
//   .then(function (data) {  
//     console.log('Request succeeded with JSON response', data);  
//   })  
//   .catch(function (error) {  
//     console.log('Request failed', error);  
//   });

// url (required), options (optional)
// fetch('https://davidwalsh.name/some/url', {
// 	method: 'get'
// }).then(function(response) {
	
// }).catch(function(err) {
// 	// Error :(
// });