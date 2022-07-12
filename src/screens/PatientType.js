import React from 'react'
// import SelectList from 'react-native-dropdown-select-list'
import { View ,StyleSheet,Text} from 'react-native'
import SelectButton from './SelectButton'
import Styles from '../components/Style'

function PatientType() {
  return (
    <View style={Styles.Container}>

          <Text style={Styles.Header}>Patient Search Info</Text>
          
          <View>
          <Text>Patient search:</Text>
          <SelectButton />
         </View>

    </View>
  )
}

export default PatientType
