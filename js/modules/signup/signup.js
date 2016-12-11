import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, List, ListItem, Button, Text, H1} from 'native-base';
import { AppRegistry, StyleSheet, View, Modal, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';



export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      is_loading_data: false
    };

    this.goCancel = this.goCancel.bind(this);
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

  notify = () =>{
   alert("Menu button pressed!");
  }

  goToHome = () => {
    this.props.navigator.push({
      name: 'Home',
      title: 'Home',
      notify: this.notify
    });
  }

  goCancel = () => {
    this.props.navigator.pop({
      name: 'Signup',
      title: 'Signup',
      notify:this.notify
    });
  }

  goNext = () => {
    this.props.navigator.push({
      name: 'Home',
      title: 'Home',
      notify: this.notify
    });
  }

  doCheckPassword = () => {

  }

  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Row style={{ backgroundColor: '#e6eeff'}}>
              <Content> 
                <Text >Put Our Icon here !</Text>
              </Content>
            </Row>

            <Row style={{ backgroundColor: '#e6eeff'}}>
              <Content>
                <List>
                  <ListItem>
                    <Content>
                      <H1>Signup Page</H1>
                    </Content>
                  </ListItem>

                  <ListItem>
                    <InputGroup style={{marginTop: 20, marginBottom: 20}}>
                      <Icon name="ios-person" />
                      <Input style={{height: 40}} placeholder="EMAIL" />
                    </InputGroup>
                  </ListItem>

                  <ListItem>
                    <InputGroup style={{marginTop: 20, marginBottom: 20}}>
                      <Icon name="ios-unlock" />
                      <Input style={{height: 40}} placeholder="PASSWORD" secureTextEntry={true}/>
                    </InputGroup>
                  </ListItem>  

                  <ListItem>
                    <InputGroup style={{marginTop: 20, marginBottom: 20}}>
                      <Icon name="ios-unlock" />
                      <Input style={{height: 40}} placeholder="RE-ENTER PASSWORD" secureTextEntry={true}/>
                    </InputGroup>
                  </ListItem> 

                  <Button style={{ alignSelf: 'auto', marginTop: 20, marginBottom: 20 }} onPress={this.goNext}> Sign Up </Button>      
                  <Button style={{ alignSelf: 'auto', marginTop: 20, marginBottom: 20 }} onPress={this.goCancel}> Cancel </Button>   
                </List>
              </Content>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('Signup', () => Signup);