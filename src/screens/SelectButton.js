import React,{useState} from 'react'
import { View,StyleSheet } from 'react-native'
import SelectList from 'react-native-dropdown-select-list'


const data = () => [
    {key: '1',value: 'one'},
    {key: '2',value: 'Two'},
    {key: '3',value: 'Three'},
    {key: '4',value: 'Four'},
    {key: '5',value: 'Five'}
  ]
  

function SelectButton() {
    const [selected,setSelected] = useState('')
  return (
    <View>
          <SelectList style={styles.slist}
          data = {data}
          setSelected={setSelected}
          // dropdownStyles={{backgroundColor:'gray'}}
          // dropdownItemStyles={{marginHorizontal:10}}
          // dropdownTextStyles={{color:'white'}}
          placeholder="select state"
          maxHeight={100}
          />
         </View>
  )
}


const styles = StyleSheet.create({ 
    slist:{
      // backgroundColor:'gray',
      marginHorizontal:10,
      color:'white'
    }
  })
  
export default SelectButton;
