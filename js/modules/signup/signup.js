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
    this.signup = this.signup.bind(this);
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
     is_loading_data: true,
     loading: false,
     userData : {}
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

  signup = () => {
    console.log("Signup for data...");

    this.setState({
        loading: true,
        is_loading_data: true        
    });

    var object = {
      method: 'POST',
      headers: {  
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'  
      },
      body: {
        'email': 'phamngoclinh@gmail.com',
        'phone': '0123456789',
        'firstName': 'Linh',
        'lastName': 'DepTrai',
        'passwordHash': 'e10adc3949ba59abbe56e057f20f883e'
      }
    };

    var result = fetch("http://210.211.118.178/PetsAPI/api/userauthinfos",object)
    .then((response) => response.text())
    .then((responseData) => console.log(responseData));   
  }

  // for testing purpose
  checkStatus = (response) => {
    if(response.status !== 200) {
      console.log('API lỗi, cờ hó Khoa đang fix' + response.status);
      return;
    }
    else {
      console.log('cờ hó Khoa đã fix lỗi');
      response.json().then((data) => {  
        console.log(data);
        this.setState({
          userData: data
        });
      });
      this.setState({
        is_loading_data: false
      });
    }
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

                  {
                    this.state.userData ? <Text>Email: {this.state.userData.userEntity.email}</Text> : <Text>No returning data</Text>
                  }

                  {
                    this.state.loading ? <Text>Loading data....</Text> : <Text>Loaded</Text>
                  }

                  <Button style={{ alignSelf: 'auto', marginTop: 20, marginBottom: 20 }} onPress={this.signup}> Sign Up </Button>

                  <Button style={{ alignSelf: 'auto', marginTop: 20, marginBottom: 20 }} onPress={this.goNext}> Next </Button>      
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