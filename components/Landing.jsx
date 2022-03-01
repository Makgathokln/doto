import React, { useState, useEffect } from 'react';
import { Text,
    View, StyleSheet,
    TouchableOpacity,
    TextInput,
    LayoutAnimation,SafeAreaView } from 'react-native';
import { ListItem, Header,Button } from 'react-native-elements';
import { SafeAreaViewProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import {
    SwipeableFlatList,
    SwipeableQuickActions,
    SwipeableQuickActionButton,
  } from 'react-native-swipe-list';

import Users from './users';
import firebase from './firebase';

const Landing = ({navigation}) =>{

    const [ todos, setTodos ] = useState(   [])
 
 useEffect(() => {
  Users.getData().on('value', snapshot => {
  const TodoLists = []
    snapshot.forEach(action => {
        const key = action.key
        const data = action.val()

        TodoLists.push({
            key: key,
            title : data.title,
            subTitle : data.subTitle,
            dsc: data.dsc
        })

        setTodos(TodoLists)
    });
  })   
 },     [])

 const DeleteAll = () =>{
    const db = firebase
db.ref('/todo').remove()
.then(alert('Your Task List Has been Cleared'))
//setTitle('')
//  displayTodos()

}
const ClearTask = () => {
const db = firebase
db.ref('/todo').remove()
.then(alert('Your Task List Has been Cleared'))
// setTitle('')
//displayTodos()
}

const deleteTask = (key) => {
const db = firebase
db.ref('/todo').remove()
.then(alert('Todo Deleted'))
}




 const displayTodos = ({item, index}) => {
     return (
<View>

<ListItem style={{border:'2px solid #ff0066', marginBottom:8}} key= {index}>
    <ListItem.Content>
        <ListItem.Title>
            { item.title }
        </ListItem.Title>

            <ListItem.Subtitle>
                { item.subTitle }
            </ListItem.Subtitle>

          

    </ListItem.Content>

    <ListItem.Chevron onPress={() => navigation.navigate('about', {
        itemId : item.key
    })}/>

    
</ListItem>
</View>

     
     )
 }

    return (
        <>
        <SafeAreaView>
        <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
<View >
    <Text style={{fontSize:30, color:'#ff0066', fontWeight:'bold', textAlign:'center', marginTop:20, marginBottom:20}}>Todo App</Text>
</View>

                <View  style={{flexDirection:'row'}} > 
            <TextInput placeholder="Click on the button to add your ToDo"  style={{borderWidth: 0.34,  flex: 1, marginLeft:10,  }} editable={false}  />
            
            
            <Button style ={{marginLeft: 10}}title={ 'ADD'} onPress= { () => navigation.navigate("Adduser") }  /> 
             </View>
            <View>{
       todos && todos.length ? (
         //  <FlatList data={todos} renderItem={displayTodos}
           // keyExtractor = {(item) => item.key}
            //removeClippedSubviews={true}
            ///>
            <SwipeableFlatList
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{padding:30,paddingBottom:100}}
            data={todos}
             renderItem={displayTodos} 
            
            
             keyExtractor={(item)=>item.key}
        renderRightActions={({item}) => (
             <SwipeableQuickActions>
                        <SwipeableQuickActionButton
                     onPress={() => { 
       
                       LayoutAnimation.configureNext(
                         LayoutAnimation.Presets.easeInEaseOut,
                       );
                     }}
                  
                     
                     />
              <TouchableOpacity  onPress={ClearTask}>
           <Icon name="delete" size={30} color={'red'}  />
           </TouchableOpacity>
                     
            </SwipeableQuickActions>
       )}/>
       ):(
           <Text style={{fontSize:20, color:'#ff0066',marginBottom:50, textAlign:'center', fontWeight:'600'}} >
               No ToDos for today
           </Text>
       )}
    </View>

    <View style={{flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center'}} >
                        <Text style={{fontSize:15, color:'gray' }}>
                            You have {todos.length} pending tasks
                        </Text>

                        <Text>
                        <Icon name='delete' color="#ff0066" onPress={ClearTask}  />
                        </Text>
                    
                   </View>
   
        </SafeAreaView>
        </>
    );
} 


export default Landing;