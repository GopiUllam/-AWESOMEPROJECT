
import React,{useState,Component} from 'react'
import {Text, View,TextInput,StyleSheet} from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';
import SelectList from 'react-native-dropdown-select-list'
import Textarea from 'react-native-textarea';


const radioButtonsData = [{
    id:'1',
    label:'Male',
    value: 'option1'
},{
    id:'2',
    label:'Female',
    value: 'option2'
}]

const data = () => [
    {key: '1',value: 'one'},
    {key: '2',value: 'two'},
    {key: '3',value: 'three'},
    {key: '4',value: 'four'},
    {key: '5',value: 'five'}
  ]



const HomeScreen = () => {
     const [radioButtons,setRadioButtons] = useState(radioButtonsData);
     const [firstName,setFirstName] = useState('')
     const [lastName,setLastName] = useState('')
     const [selected,setSelected] = useState('')

     

    const onPreassRadioButton = (radioButtonsArray) => {
        setRadioButtons(radioButtonsArray)
    }
return(
    <View style={styles.container}>

        <View style={styles.subContainer}>
               <View>
                <Text>FirstName:</Text>
                <TextInput
                style={styles.input}
                value={firstName}
                placeholder="Enter first name"
                onChangeText={value => setFirstName(value)} />
               </View>

               <View>
                <Text>LastName:</Text>
                <TextInput
                style={styles.input}
                value={lastName}
                placeholder="Enter last name"
                onChangeText={value => setLastName(value)} />
               </View>
                
             {/* for radio button*/}
              <View>
              <Text>Gender:</Text>
               <RadioGroup 
                style={styles.group}
                radioButtons={radioButtons}
                onPress={onPreassRadioButton}
                />
              </View>


              {/* for dropdown button*/}
              <View style={{paddingHorizontal:20,paddingVertical:50,flex:1}}>
              <SelectList 
              data={data}
              setSelected={setSelected}
              dropdownStyles={{backgroundColor:'gray'}}
              dropdownItemStyles={{marginHorizontal:10}}
              dropdownTextStyles={{color:'white'}}
              placeholder="Select state"
              maxHeight={100} />
              </View>

            <View>
              <Textarea
                    containerStyle={styles.textareaContainer}
                    style={styles.textarea}
                    // onChangeText={this.onChange}
                    // defaultValue={this.state.text}
                    maxLength={120}
                    placeholder={'Enter what ever you want'}
                    placeholderTextColor={'#c7c7c7'}
                    underlineColorAndroid={'transparent'}
                />
              </View> 
          </View>      

   </View>
    
)
};

const styles = StyleSheet.create({
     
      container: {
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'green',
        padding: 30
        },
        subContainer: {
            backgroundColor:'white',
            padding:30,
            borderRadius:20,
        },
        input:{
            backgroundColor:'yellow',
            height:40,
            borderRadius:5
        }, 
        group: {
            alignItems:'left',
            justifyContent:'left',
            backgroundColor:'yellow'
        },
      textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
      },
      textarea: {
        textAlignVertical: 'top', 
        height: 170,
        fontSize: 14,
        color: '#333',
      },
})


export default HomeScreen;

