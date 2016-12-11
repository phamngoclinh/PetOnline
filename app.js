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

import Drawer from 'react-native-drawer';


import Sidebar from './js/components/sidebar/sidebar';
import Startup from './js/modules/startup/startup';
import Homepage from './js/modules/homepage/homepage';
import Category from './js/modules/category/category';
import Detail from './js/modules/detail/detail';

/*<Navigator
            initialRoute = {{ name: 'Startup', title: 'Startup' }}
            renderScene = { this.renderScene }
            navigationBar = {
               <Navigator.NavigationBar
                  style = { styles.navigationBar }
                  routeMapper = { NavigationBarRouteMapper } />
            } />*/


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

    openMenu = () =>{
    	alert("Menu button pressed!")
    };


   	render() {
      	return (
	        <Drawer
		        ref={(ref) => this._drawer = ref}
		        type="overlay"
		        content= {<Sidebar
	        		closeSidebar = {this.closeSidebar}
		        />}
		     	tapToClose={true}
				openDrawerOffset={0.2}
				panCloseMask={0.2}
				closedDrawerOffset={-3}
				styles={drawerStyles}
				tweenHandler={(ratio) => ({
				    main: { opacity:(10-ratio)/2 }
				})}
		    >

		      	<Button onPress = {this.openSidebar}>Toggle Sidebar</Button>

	         	<Navigator
		            initialRoute = {{ name: 'Home', title: 'Home' }}
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
      if(route.name == 'Category') {
        return (
            <Category
               navigator = {navigator}
               {...route.passProps} />
        )
      }
      if(route.name == 'Detail') {
        return (
            <Detail
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
      else { 
      	return (
            <TouchableOpacity
               onPress = {() => { if (index > 0) { navigator.pop() } }}>
               <Text style={ styles.leftButton }>
                  LOGO
               </Text>
            </TouchableOpacity>
         )
      }
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

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

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