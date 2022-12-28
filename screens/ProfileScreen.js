import React from 'react';
import { StyleSheet,Text,View,ActivityIndicator } from 'react-native';

export default class ProfileScreen extends React.Component{

  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      dataSource:null,

    }
  }
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
     .then((response) => response.json())
     .then ((responseJson) =>{

      this.setState({
        isLoading:false,
        dataSource:responseJson.movies,
      })
     })

     .catch((error) => {
      console.log(error)
     });

  }

  render(){
if(this.state.isLoading){

  return(

    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}else{

  let movies = this.state.dataSource.map((item,key)=> {
    return < View key={key} style={styles.item} >
      <Text style={{color:'black',fontSize:30,backgroundColor:'#78938A'}}>{item.title}</Text>
    </View>
  });

    return(
      <View style={styles.container}>
       {movies}
      </View>
    );
  }
}
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F3C5C5',
    alignItems:'center',
    justifyContent:'center',

  },

  item:{
    flex:1,
    alignSelf:'stretch',
    margin:20,
    //alignItems:'center',
    justifyContent:'center',
    //borderBotttomWidth:10,
    //borderBottomColor:'red',
  },
});