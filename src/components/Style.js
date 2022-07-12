import React from 'react'
import {StyleSheet} from 'react-native'


const Styles = StyleSheet.create({

    topMainContainer: {
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
        marginTop:50
    },
    // Total home page 
    mainContainer: { 
        backgroundColor: "red",
        alignItems: 'center',
        alignItems:'center',
        justifyContent:'center',
        padding:20, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlignVertical: "center",  
      },
      header: {
        fontSize:30,
        color: 'white',
        marginRight:10
      },
      cancelHeader: {
        fontSize:30,
        color: 'white',
        marginRight:200,
        marginRight:150
        // position:'fixed'
      },
    //   End of total home page

    Header:{
        backgroundColor:'gray',
        paddingVertical:10,
        fontSize:20,
        fontWeight:'bold',
      }, 
    Container: {
        borderRadius:5,
        // borderStyle: 'solid double',
        borderWidth:2,
        borderColor:'yellow'
      },
      box:{
        backgroundColor:'white',
        height:30,
        borderRadius: 5,
        padding:5,
        borderWidth:1,
      },
      box12:{
        height: 100,
        backgroundColor:'white',
        padding: 30,
        // borderStyle:'dotted solid double',
        borderWidth:1,
      },
      phoneBox:{
        // width:1200,
        borderWidth:1,
        borderRadius:4,
        height: 10,
        backgroundColor:'white',
        height:45,
        paddingLeft:10,
        marginLeft:5,
        borderRadius: 5,
        padding:5,
        width:295,
        borderWidth:1,

      }, 
      ItemContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlignVertical: "center",
        marginTop:10
        
      },
      buttonS: {
        marginTop:100,
        paddingTop:20,

      }
})


export default Styles
