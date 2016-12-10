
const React = require('react-native');

const { StyleSheet } = React;

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


module.exports = StyleSheet.create({
	colorLight: {
		// color: '#fff'
	},
  sidebar: {
    flex: 1,
    height: 1000,
    flexDirection : 'column',
    padding: 0,
    backgroundColor: '#267ecf',
  },

  // Header
  sidebarHeader: {
    padding: 10,
    flex: 1,
    flexDirection : 'row',
  	backgroundColor: '#2860c8'
  },
  sidebarAvatar: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 10
  },
  sidebarMainButton: {
    textAlign: 'right',
    marginTop: 13
  },
  badgeButton: {
    textAlign: 'right',
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  

  // Content
  sidebarContent: {
    paddingTop: 40,
    paddingBottom: 40,
    flex: 3,
  },
  sidebarMenu: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  sidebarMenuButton: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },

  // Footer
  sidebarFooter: {
    bottom: -100,
    left: 0,
    right: 0,
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 55
  },
});
