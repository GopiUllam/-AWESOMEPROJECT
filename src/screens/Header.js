import React from 'react'
import Styles from '../components/Style'
import { View,TouchableOpacity,Text } from 'react-native'

const Header = () => {
  return (
   
    
         <View style={Styles.mainContainer}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Register')}>
            <Text style={Styles.cancelHeader}>Cancel</Text>
          </TouchableOpacity>
          <Text style={Styles.header}>Personal</Text>            
         </View>

  )
}

export default Header
