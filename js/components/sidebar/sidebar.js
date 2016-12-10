import { Container, Header, Title, List, ListItem, Badge, InputGroup, Spinner, Card, CardItem, Input, Icon, Button, Content, Text, Thumbnail } from 'native-base';
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

// import { setIndex } from '../../actions/list';
// import navigateTo from '../../actions/sideBarNav';
// import myTheme from '../../themes/base-theme';

import styles from './style';

export default class Sidebar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content style={styles.sidebar} >
          <Button onPress = {this.props.closeSidebar}>Toggle Sidebar</Button>
          <View style={styles.sidebarHeader}>
              {/*
                <Image style={styles.sidebarAvatar} source={require('../../../images/avatar.png')}></Image>
              */}
          
              <View>
                  <Text style={styles.colorLight}>Phạm Ngọc Linh</Text>
                  <Text note style={styles.colorLight}>Administrator</Text>
              </View>

              <Button style={styles.sidebarMainButton}>SETTING</Button>
          </View>

          <View style={styles.sidebarContent}>
              <Card style={styles.sidebarMenu}>
                  <CardItem style={styles.sidebarMenuButton} transparent button onPress={() => this.props.closeSidebar}>
                      <Icon name='ios-home'/>
                      <Text>DASHBOARD</Text>
                      <Badge style={styles.badgeButton}>2</Badge>
                  </CardItem>
              </Card>
          </View>

          <View>
              <Text>2016 Copyright</Text>
          </View>
      </Content>
    );
  }
}

AppRegistry.registerComponent('Sidebar', () => Sidebar);