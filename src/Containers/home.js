import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { ListView, ScrollView, Button, TouchableOpacity, Image } from 'react-native'
import PTRView from 'react-native-pull-to-refresh';
import base64 from 'base-64';
import { BASE_URL_NEWS, BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD } from '../utils/Constants';
import Settings from './settings';
import images from '../Themes/images';

class home extends Component {

    constructor(props) {
        super(props);
        // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        // this.state = {
        //     responseData: ds.cloneWithRows([]),
        // };
        this.state = {
            responseData: []
        }
        this.refreshPTR = this._refresh.bind(this)
        this.scrollToEnd = this._scrollEnd.bind(this)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'MY HOME',
            headerRight: (

                // <Button 
                //   onPress={() => navigation.navigate('MySettings')}
                //   title= 'info'
                //   color = '#ff0000'    
                // />

                <TouchableOpacity onPress={() => navigation.navigate('MySettings')}>
                    <Image source={images.settingsIcon} />
                </TouchableOpacity>
            )
        }
    }

    _refresh() {
        alert('onLoadMore')
        return new Promise((resolve) => {
            setTimeout(() => { resolve() }, 2000)
        });
    }

    _scrollEnd() {
        alert('_scrollEnd')
    }

    onLoadMore() {
        alert('onLoadMore');
    }
    handleScroll() {
        //console.log(event.nativeEvent.contentOffset.y);

        alert('PTRSCrllVIEW')
    }

    componentDidMount() {
        let url = BASE_URL_NEWS;
        let username = BASIC_AUTH_USERNAME;
        let password = BASIC_AUTH_PASSWORD;
        // var headers = new Headers();
        // headers.append("Authorization", "Basic "+base64.encode(username":"password));
        return fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Basic ' + base64.encode(username + ':' + password),
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    // responseData: ds.cloneWithRows(responseJson),
                    responseData: responseJson
                })
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {

        //  console.log(this.state.responseData)

        return (
            <Container>
                {/* <Header /> */}
                {/* <PTRView style = {{height:50,backgroundColor:'red'}}
                    onRefresh={
                        this.refreshPTR
                    }
                    // scrollToEnd={
                    //     this.scrollToEnd
                    // }
                    onScroll={
                        //alert('PTRSCrllVIEW')
                       // this.scrollToEnd
                    } 
                > */}

                <ScrollView style={{ height: 100 }}

                    onScroll={() => { }
                        //alert('PTRSCrllVIEW')
                        //this.scrollToEnd
                    } >
                    <Content
                    //     onScroll={() => {

                    //     console.log('ONSCROLLLLLLL')
                    //     this.onLoadMore()
                    // }}

                    >


                        <List>
                            {
                                this.state.responseData.map((item, index) => {
                                    return (
                                        <ListItem key={index}>
                                            <Text> {item.title.rendered} </Text>
                                        </ListItem>

                                    )
                                })
                            }
                        </List>
                    </Content>

                    {/* <ScrollView style={{height:100}}
                    
                    onScroll={
                        //alert('PTRSCrllVIEW')
                        this.scrollToEnd
                    } >
                        <ListView
                            dataSource={this.state.responseData}
                            renderRow={(item) => <Text>{item.title.rendered}</Text>}
                        />
                    </ScrollView> */}
                </ScrollView>
                {/* </PTRView> */}
            </Container>
        )
    }
}
export default home;