import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, List, ListItem, Button, Text, H1} from 'native-base';
import { AppRegistry, StyleSheet, View, Modal, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';



export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      is_loading_data: false,
      phone: '',
      email: '',
      password:'',
      re_password:'',
      userData: null
    };

    this.goCancel = this.goCancel.bind(this);
    this.signup = this.signup.bind(this);
  }

  componentDidMount() {
    let _this = this;

	}

	componentWillMount() {
		let _this = this;
	}

  notify = () =>{
   alert("Menu button pressed!");
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

  doCheckPassword = (first, second) => {
    if (first != second) {
      return false;
    } else {
      return true;
    }
  }

  // for testing purpose
  checkStatus = (response) => {
    console.log("response: ", response.json());
    if(response.status == 200) {
      alert("Account created!");
      return true;
    }
    else {
      alert("API lỗi, cờ hó Khoa đang fix..." + response);
      return false;
    }
  }



  signup = () => {
    console.log("Signup is running...");

    if(!this.doCheckPassword(this.state.password, this.state.re_password)) {
      console.log("check your passs");
      alert("please check your password!");
      return;
    }

    this.setState({
        loading: true,
        is_loading_data: true        
    });

    fetch("http://210.211.118.178/PetsAPI/api/userauthinfos", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': this.state.email,
        'phone': this.state.phone,
        'firstName': '',
        'lastName': '',
        'passwordHash': this.state.password
      })      
    })
    .then((response) => response.json())            
    .then((responseJson) => {      
        // Store the results in the state variable results and set loading to
        this.setState({
          userData: responseJson,
          is_loading_data: false
        });
        console.log("result json", responseJson);
        alert('Successfully!');
    }) 
    .catch((error) => {
        this.setState({                    
          loading: false
      });
        console.error(error);
    });    
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
                      <Icon name="ios-email" />
                      <Input style={{height: 40}} placeholder="EMAIL" value={this.state.email} onChangeText={(text) => this.setState({email:text})}/>
                    </InputGroup>
                  </ListItem>

                  <ListItem>
                    <InputGroup style={{marginTop: 20, marginBottom: 20}}>
                      <Icon name="ios-phone" />
                      <Input style={{height: 40}} placeholder="PHONE" value={this.state.phone} onChangeText={(text) => this.setState({phone:text})}/>
                    </InputGroup>
                  </ListItem>  

                  <ListItem>
                    <InputGroup style={{marginTop: 20, marginBottom: 20}}>
                      <Icon name="ios-unlock" />
                      <Input style={{height: 40}} placeholder="PASSWORD" secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({password:text})}/>
                    </InputGroup>
                  </ListItem>  

                  <ListItem>
                    <InputGroup style={{marginTop: 20, marginBottom: 20}}>
                      <Icon name="ios-unlock" />
                      <Input style={{height: 40}} placeholder="RE-ENTER PASSWORD" secureTextEntry={true} value={this.state.re_password} onChangeText={(text) => this.setState({re_password:text})}/>
                    </InputGroup>
                  </ListItem> 

                  {
                    /*{
                     this.state.userData ? (<Text>Email.....{this.state.userData.userEntity.email} </Text>) : (<Text>No returning data</Text>)
                  }

                  {
                    this.state.loading ? (<Text>Loading data....</Text>) : (<Text>Loaded</Text>)
                  }*/
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