import { Container, Header, Title, List, ListItem, InputGroup, Spinner, Card, CardItem, Input, Icon, Button, Content, Text, Thumbnail } from 'native-base';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Modal,
  Image,
  Navigator,
  TouchableOpacity,
  BackAndroid
} from 'react-native';

// import { closeDrawer } from './actions/drawer';

import Drawer from 'react-native-drawer';


import Sidebar from './js/components/sidebar/sidebar';
import Startup from './js/modules/startup/startup';
import Homepage from './js/modules/homepage/homepage';

/*<Navigator
            initialRoute = {{ name: 'Startup', title: 'Startup' }}
            renderScene = { this.renderScene }
            navigationBar = {
               <Navigator.NavigationBar
                  style = { styles.navigationBar }
                  routeMapper = { NavigationBarRouteMapper } />
            } />*/

const drawerStyles = {
	  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
	  main: {paddingLeft: 3},
	}

export default class App extends Component {
   constructor(){
      super()
   }

   componentDidMount() {
   		BackAndroid.addEventListener('hardwareBackPress', () => {
	      // if (this.navigation.name === 'Homepage' || this.navigation.name === 'Startup') {
	      //   return false;
	      // }

	      // this.popRoute(this.navigation.key);
	      // return true;
	      alert("BackAndroid is pressed!");
	    });
   }

   	closeSidebar = () => {
    	this._drawer.close()
  	};
  	openSidebar = () => {
    	this._drawer.open()
  	};



   	render() {
      	return (
	        <Drawer
		        ref={(ref) => this._drawer = ref}
		        type="overlay"
		        content= {<Sidebar
	        		closeSidebar = {this.closeSidebar}
	        		openSidebar = {this.openSidebar}
		        />}
		     	tapToClose={true}
				openDrawerOffset={0.2}
				panCloseMask={0.2}
				closedDrawerOffset={-3}
				styles={drawerStyles}
				tweenHandler={(ratio) => ({
				    main: { opacity:(2-ratio)/2 }
				})}
		    >

		      	<Button onPress = {this.openSidebar}>Toggle Sidebar</Button>
	         	<Navigator
		            initialRoute = {{ name: 'Startup', title: 'Startup' }}
		            renderScene = { this.renderScene }
		        />

	        </Drawer>
      	);
   	}

   renderScene(route, navigator) {
      if(route.name == 'Startup') {
        return (
            <Startup
               navigator = {navigator}
               {...route.passProps} />
        )
      }
      if(route.name == 'Home') {
        return (
            <Homepage
               navigator = {navigator}
               {...route.passProps} />
        )
      }
   }
}

var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
      if(index > 0) {
         return (
            <TouchableOpacity
               onPress = {() => { if (index > 0) { navigator.pop() } }}>
               <Text style={ styles.leftButton }>
                  Back
               </Text>
            </TouchableOpacity>
         )
      }
      else { return null }
   },
   RightButton(route, navigator, index, navState) {
      if (route.openMenu) return (
         <TouchableOpacity
            onPress = { () => route.openMenu() }>
            <Text style = { styles.rightButton }>
               { route.rightText || 'Menu' }
            </Text>
         </TouchableOpacity>
      )
   },
   Title(route, navigator, index, navState) {
      return (
         <Text style = { styles.title }>
            {route.title}
         </Text>
      )
   }
};

const styles = StyleSheet.create({
   navigationBar: {
      backgroundColor: 'blue',
   },
   leftButton: {
      color: '#ffffff',
      margin: 10,
      fontSize: 17,
   },
   title: {
      paddingVertical: 10,
      color: '#ffffff',
      justifyContent: 'center',
      fontSize: 18
   },
   rightButton: {
      color: 'white',
      margin: 10,
      fontSize: 16
   }
})


AppRegistry.registerComponent('PetOnline', () => App);

// export default class App extends Component {
//   	constructor(props) {
// 	    super(props);
// 	    this.state = {
// 	    	pipePage: [],
// 	    	currentPage: 'startup',
// 	    	results: {},
// 	    	modalVisible: false,
// 	    	selectedItem: {},
// 	    	search: '',
// 	        loading: false,
// 	        is_loading_data: false
// 	    };

// 	    this.search = this.search.bind(this);
// 	    this.setParentState = this.setParentState.bind(this);
// 	}

// 	componentDidMount() {

// 	}

// 	setParentState(stateOjbect) {
// 		this.setState({
// 			currentPage: 'homepage'
// 		});
// 	}

//   	search() {
// 	    // Set loading to true when the search starts to display a Spinner        
// 	    this.setState({            
// 	        loading: true,
// 	        is_loading_data: true        
// 	    });

// 	    var that = this;        
// 	    return fetch('https://api.github.com/search/repositories?q='+this.state.search, {
// 	    	method: 'get'
// 	    })            
// 	    .then((response) => response.json())            
// 	    .then((responseJson) => {      
// 	        // Store the results in the state variable results and set loading to
// 	        that.setState({
// 	        	results: responseJson,
// 	        	is_loading_data: false
// 	        });
// 	    }) 
// 	    .catch((error) => {
// 	        that.setState({                    
// 		        loading: false
// 		    });
// 	        console.error(error);
// 	    });    
// 	}

// 	setModalVisible(is_show, item) {
// 		this.setState({
// 			modalVisible : is_show,
// 			selectedItem : item
// 		});
// 	}

// 	loadingData() {
// 		let that = this;
//         that.setState({
//         	is_loading_data: true
//         })
//     }

//     renderContent() {
//     	var page = this.state.currentPage;
//     	switch(page) {
//     		case 'startup':
//     			return (<Startup setParentState={this.setParentState} />);
//     			break;
//     		case 'login':
//     			return <Login setParentState={this.setParentState} />;
//     			break;
//     		case 'signup':
//     			return <Signup setParentState={this.setParentState} />;
//     			break;
//     		case 'profile':
//     			return <Profile setParentState={this.setParentState} />;
//     			break;
//     		case 'category':
//     			return <Category setParentState={this.setParentState} />;
//     			break;
//     		case 'homepage':
//     			return <Homepage setParentState={this.setParentState} />;
//     			break;
//     		default:
//     			return <Homepage setParentState={this.setParentState} />;
//     			break;
//     	}
//     }

//   	render() {
// 	    return (
// 	    	<Homepage setParentState={this.setParentState} />
// 	    );
//   	}
// }

	   //    	<Container>
		  //   	<Content>
		  //   		{
				// 		this.renderContent()
		  //   		}
				// </Content>
		  //   </Container>



// import { Container, Header, Title, List, ListItem, InputGroup, Spinner, Card, CardItem, Input, Icon, Button, Content, Text, Thumbnail } from 'native-base';
// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, View, Modal, Image } from 'react-native';

// // import { Startup, Homepage } from 'AppRegistry';
// // import Startup from './js/modules/startup/startup';
// // import Homepage from './js/modules/homepage/homepage';

// export default class App extends Component {
//   	constructor(props) {
// 	    super(props);
// 	    this.state = {
// 	    	pipePage: [],
// 	    	currentPage: 'startup',
// 	        loading: false,
// 	        is_loading_data: false
// 	    };

// 	    this.setParentState = this.setParentState.bind(this);
// 	}

// 	componentDidMount() {

// 	}

// 	setParentState(stateOjbect) {
// 		this.setState(stateObject);
// 	}

// 	loadingData() {
// 		let that = this;
//         that.setState({
//         	is_loading_data: true
//         })
//     }

//     renderContent() {
//     	var page = this.state.currentPage;
//     	switch(page) {
//     		case 'startup':
//     			return (<Startup setParentState={this.setParentState} />);
//     			break;
//     		case 'login':
//     			return <Login setParentState={this.setParentState} />;
//     			break;
//     		case 'signup':
//     			return <Signup setParentState={this.setParentState} />;
//     			break;
//     		case 'profile':
//     			return <Profile setParentState={this.setParentState} />;
//     			break;
//     		case 'category':
//     			return <Category setParentState={this.setParentState} />;
//     			break;
//     		case 'homepage':
//     			return <Homepage setParentState={this.setParentState} />;
//     			break;
//     		default:
//     			return <Homepage setParentState={this.setParentState} />;
//     			break;
//     	}
//     }

//   	render() {
// 	    return (
// 	      	<Container>
// 		      	<Header searchBar rounded>                            
// 				    <InputGroup>                        
// 				        <Icon name="ios-search" />                        
// 				        <Input placeholder="Search..." value={this.state.search}  onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.search()}/>                    
// 				    </InputGroup>                    
// 				    <Button transparent onPress={()=>this.search()}>Go</Button>                
// 				</Header>

// 				<Content>
					
// 					<List dataArray={this.state.results.items} renderRow={(item) =>               
// 					    <ListItem button onPress={()=>this.setModalVisible(true, item)}> 
// 					        <Thumbnail square size={80} source={{uri: item.owner.avatar_url}} />
// 					        <Text>Name: <Text style={{fontWeight: '600', color: '#46ee4b'}}>{item.name}</Text></Text>
// 					        <Text style={{color:'#007594'}}>{item.full_name}</Text>    
// 					        <Text note>Score: <Text note style={{marginTop: 5}}>{item.score}</Text></Text>    
// 					    </ListItem>                            
// 					} />

// 					{this.state.is_loading_data ? <Spinner color='blue' visible={this.state.is_loading_data} /> : null}

// 				</Content>
// 	      	</Container>
// 	    );
//   	}
// }

// AppRegistry.registerComponent('PetOnline', () => App);