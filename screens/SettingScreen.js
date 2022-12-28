import React, { Component } from 'react'
import { View, Image, StyleSheet, ScrollView, Text, FlatList , overScrollMode} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

class Banner extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.apiCall();
  }
  async apiCall() {
    let resp = await fetch('https://kavasamkonnect.com/api/home-banner')
    let respJson = await resp.json()
    //console.warn(respJson)
    this.setState({ data: respJson });
  }

  render() {
    return (
      <SafeAreaView>
      <View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 40, textAlign: 'center', color: 'black', marginTop: 20 }}>API CALL</Text>
          
          <FlatList
            data={this.state.data}
            renderItem={({ item }) =>
            <View>
              <Text style={styles.text}>{item.text},{item.description} </Text> 
              <Image source={{ uri:(item._links.awsBannerUrl.href) }}
              //style={{ width: 200, height: 200, marginLeft: 80 }}
              style={styles.image}
            />
            </View>
            }
          />
        </View>
      </ScrollView>
      </View>
      </SafeAreaView>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    padding: 10,
    margin: 20,
    backgroundColor: '#B2BEB5',
    borderWidth: 2,
    borderColor: 'black'
  },
  image: {
    flex: 1,
    height: 300,
    width: '90%',
    marginLeft:20,
    padding:100,
    justifyContent: "center"
  },
})



export default Banner;