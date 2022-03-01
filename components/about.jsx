import React, { useState, useEffect } from 'react';
import { StyleSheet,Text, View, Button, FlatList, TextInput, SafeAreaView } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
//import { SafeAreaViewProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import Users from './users';
//import  from 'react-native-safe-area-view';

const about =({route, navigation}) =>{

    const { itemId } = route.params
    const id = itemId

const [ title, setTitle] = useState()
const [subTitle, setSubTitle] = useState()
const [dsc, setDsc] =  useState()

useEffect( ()=>{
    Users.getDataById(id).once('value', snapshot =>{
        const data = snapshot.val()

        setTitle(data.title)
        setSubTitle(data.subTitle)
        setDsc(data.dsc)
    })
}, [])

const createUpdate = () => {
    Users.updateTodo(id, {
        title: title,
        subTitle: subTitle,
        dsc : dsc
    }),then(() => console.log('data updated')).catch(err => console.log(err))
}

const edit = () =>{
    const Todo = []
    Users.updateTodo(id,{
        title:title,
        subTitle: subTitle,
        dsc : dsc
    })
    .then(alert('Todo has been updated'))
    .catch(err =>console.log(err))
    navigation.goBack()
}

const deleteTask = () => {
    Users.deleteTodo(id)
    
    .then(() => { console.log('todo deleted');
     navigation.navigate('home')})
     .catch(err => console.log(err))
     .then(alert('Todo has been deleted'))

}

return(
    <>
    <SafeAreaView>
        <Header>
        <Icon name="keyboard-arrow-left" size={38} color='#fff' style={{marginTop:2}}  onPress={navigation.goBack} />
        <Text style={{fontSize: 30, color:'#fff', fontWeight:'bold', textAlign:'center', marginBottom: 20, marginTop: 20}}>Update Todo</Text>

            {/* <Icon name='edit' color="#fff" style={{marginRight:50}} />            */}
        </Header>

        <View>
        {/* <Text style={{fontSize: 30, color:'#ff0066', fontWeight:'bold', textAlign:'center', marginBottom: 20, marginTop: 20}}> Update Todo</Text> */}

           
        </View>    
        
        <View style={{marginTop:40}}>
                <TextInput style={styles.textinput} value={title}  onChangeText={ text => setTitle(text)} placeholder={"Please enter your title"}/>
                <TextInput style={styles.textinput} value={subTitle}  onChangeText={ text => setSubTitle(text)} placeholder={"Please enter your subtitle"}/>
                <TextInput style={styles.textinput} value={dsc}  onChangeText={ text => setDsc(text)} placeholder={"Please enter your description"}/>

            </View>

            <View  style={{flexDirection:'row',justifyContent:'space-evenly', alignContent:'stretch',bottom:-60, marginLeft:20,flex:1,justifyContent: "space-around"}}>
             
                <Button  title={"Update"} onPress={edit}/>
                <Button  title={"Delete"} onPress={deleteTask}/>

            </View>
    </SafeAreaView>
    </>
)
}

const styles =  StyleSheet.create({
    textinput: {
        height: 50,
        padding: 9,
        margin: 4,
        borderRadius: 10,
        backgroundColor: '#ffe6f0'
    },
})
export default about;