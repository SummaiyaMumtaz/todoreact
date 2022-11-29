// import React from 'react'
// import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// function App() {
//   return (
//     <>
//       <View style={styles.box}>
//         <Text style={styles.headng}>Log In</Text>
//             <View style={styles.inputbox}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Email"
//     placeholderTextColor="#003f5c"
//   />
// </View>
 
// <View style={styles.inputbox}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Password"
//     placeholderTextColor="#003f5c"
//     secureTextEntry={true}
    
//   />
// </View>

// <TouchableOpacity style={styles.loginBtn}>
//   <Text style={{ fontWeight:"bold",
//     fontSize:20,
//     color :"white"}}>LOGIN</Text>
// </TouchableOpacity>
//         </View>
//         </>
//   )}





// const styles = StyleSheet.create({
//   headng:{
//     marginBottom:10,
//     // color:"#FF1493",
//     fontFamily: 'italic',
//     fontWeight:"bold",
//     fontSize:30,
//     color :"black",
//   },
//   box: {
//         flex: 1,
//         color :"",
//         backgroundColor: '#C5C5C5',
//         alignItems: 'center',
//         fontSize: 20,
//         justifyContent: 'center',
//        },
//        inputbox: {
//         backgroundColor: "white",
//         color:"white",
//         // borderRadius: 30,
//         borderColor:"White",
//         width: "70%",
//         height: 45,
//         marginBottom: 20,
//         alignItems: "center",
//       },
      
//       TextInput: {
//         height: 50,
//         flex: 1,
//         padding: 10,
//         marginLeft: 20,
//       },
   
//       loginBtn:
//  {
//    width:"50%",
//   //  borderRadius:25,
//    height:50,
//    alignItems:"center",
//    justifyContent:"center",
//    marginTop:40,
//    backgroundColor:"White",
   
//  }
 
// });

// export default App;


import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [currentEditIndex, setCurrentEditIndex] = useState(1)
  const [editMode, setEditMode] = useState(false);

  let add = () => {
    console.log('add function');
    setList([...list, text]);
    setText("");
  };
  let del = i => {
    list.splice(i, 1);
    setList([...list]);
  };
  let edit = (i) => {
    // console.log(i);
    setText(list[i]);
    setEditMode(true);
    // setEditMode(true);
    setCurrentEditIndex(i);
  };
  const updateItems = () =>{
    const tempList = [...list];
    tempList.splice(currentEditIndex,1,text);
    setList(tempList);
    setEditMode(false);
    setCurrentEditIndex(-1);
    setText("")
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          {/* <Image source={} style={{width: 50, height: 50}} /> */}
        </View>
        <Text style={styles.heading}>TODO APP</Text>
        <TextInput
          onChangeText={e => setText(e)}
          style={styles.input}
          placeholder="Enter Todo"
        />
        {
          editMode?
          <Button onClick={updateItems} >Update</Button> : setEditMode(false)
        }

        <Button title="Add" onPress={add} color="black" />
        <Text>{text}</Text>
        {list.map((x, i) => (
          <View key={i}>
            <Text style={{color: 'black', fontSize: 25}}>{x}</Text>
            {/* <TouchableOpacity>
              <Image style={{width: 30, height: 30}} source={uri:""}/>
            </TouchableOpacity> */}
            <Button
              style={styles.button}
              title="Delete"
              onPress={() => del(i)}
            />

            <Button title="Edit" onPress={() => edit(x, i)} />
          </View>
        ))}
      </View>
    </>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: 'darkgray', height: '100%'},
  heading: {
    fontSize: 35,
    textAlign: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 2,
    marginVertical: 10,
  },
  button: {
    marginBottom: 2,
    padding: 20,
  },
})