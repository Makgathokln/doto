import { Button, Image,Text, View, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Header } from 'react-native-elements';
//import SafeAreaView from 'react-native-safe-area-view';

import Users from './users';
import { Icon } from 'react-native-elements';

const Adduser = ({navigation}) => {
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const [dsc, setDsc] = useState()
    



    const createTodo= () =>{
        const todos = {
            title : title,
            subTitle : subTitle,
            dsc : dsc
        }
        Users.createTodo(todos)
        .then(() => {console.log('todo created'); navigation.navigate('home')}).catch(err => console.log(err))
        .then(alert('Todo has been added'))
    }

    
    return(
        <>
        <SafeAreaView>
            <Header>
            <Icon name='book' color="#fff"  style={{marginTop:2}} /> 
            </Header>
            
            
            <View>


            <Text style={{fontSize: 30, color:'#ff0066', fontWeight:'bold', textAlign:'center', marginBottom: 20, marginTop: 20}}>Add new Todo</Text>
            </View>

            <View>
                <TextInput style={styles.textinput} onChangeText={ text => setTitle(text)} placeholder={"Please enter your title"}/>
                <TextInput style={styles.textinput} onChangeText={ text => setSubTitle(text)} placeholder={"Please enter your sub-title"}/>
                <TextInput style={styles.textinput}  onChangeText={ text => setDsc(text)} placeholder={"Please enter your description"}/>

            </View>

            <View  style={{flexDirection:'row', flexWrap:'wrap',position: 'absolute',bottom:-60, marginLeft:20,flex:1,justifyContent: "space-around"}}>
                <Button style={{marginTop:90, marginBottom:90}} title={"Submit Todo"} onPress={createTodo}/>

            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    viewCover : {
        padding: 2
    },
    button: {
        width: "100%"
    },
    cover:{
        backgroundColor:"red"
    },
    textinput: {
        height: 50,
        padding: 9,
        margin: 4,
        borderRadius: 10,
        backgroundColor: '#ffe6f0'
    },
})



export default Adduser;