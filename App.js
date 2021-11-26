
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard, Touchable } from 'react-native';
import Task from './components/Task';
import InputBar from './components/InputBar';

export default function App() {
  const [title, setTitle] = useState('Toodler')
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [state, setState] = useState('home');
  const [boardId, setBoardId] = useState();
  const [listId, setListId] = useState();

  const [boardList, setBoards] = useState([{
    "id": 1,
    "name": "Trip to the Netherlands!",
    "thumbnailPhoto": "https://images.prismic.io/indiecampers-demo/9f34856d-05da-4afb-832f-d3a36de83b7f_Hero---Kinderdijk.jpg"
},
{
    "id": 2,
    "name": "Boring stuff",
    "thumbnailPhoto": "https://hbr.org/resources/images/article_assets/2019/06/Jun19_05_1040477378.jpg"
},
{
    "id": 3,
    "name": "Bucket list",
    "thumbnailPhoto": "https://images-na.ssl-images-amazon.com/images/I/61fq9A8jEGL._SL1500_.jpg"
}]);

  const [listList, setLists] = useState([{
    "id": 1,
    "name": "Must see!",
    "color": "#ffffff",
    "boardId": 1
},
{
    "id": 2,
    "name": "One-day trips!",
    "color": "#00ff00",
    "boardId": 1
},
{
    "id": 3,
    "name": "Backlog",
    "color": "#dddddd",
    "boardId": 2
},
{
    "id": 4,
    "name": "In progress",
    "color": "#cccccc",
    "boardId": 2
},
{
    "id": 5,
    "name": "Done",
    "color": "#555555",
    "boardId": 2
},
{
    "id": 6,
    "name": "Top 10",
    "color": "#ff0000",
    "boardId": 3
},
{
    "id": 7,
    "name": "Top 10-20",
    "color": "#0000ff",
    "boardId": 3
},
{
    "id": 8,
    "name": "Last",
    "color": "#ff00ff",
    "boardId": 3
}]);

  const [taskList, setTasks] = useState([{
    "id": 1,
    "name": "Van Gogh Museum",
    "description": "Take a walk in the musem of Van Gogh!",
    "isFinished": false,
    "listId": 1
},
{
    "id": 2,
    "name": "Sunflower fields",
    "description": "Want to see the sunflower fields in the Netherlands!",
    "isFinished": true,
    "listId": 1
},
{
    "id": 3,
    "name": "Rotterdam port",
    "description": "See the biggest shipping port in Europe!",
    "isFinished": false,
    "listId": 2
},
{
    "id": 4,
    "name": "Helicopter ride over Amsterdam",
    "description": "A breath-taking view over the infamous Amsterdam city in a helicopter",
    "isFinished": true,
    "listId": 2
},
{
    "id": 5,
    "name": "Take out trash",
    "description": "Gotta take out the trash...",
    "isFinished": false,
    "listId": 3
},
{
    "id": 6,
    "name": "Do laundry",
    "description": "Wash those whites!",
    "isFinished": false,
    "listId": 3
},
{
    "id": 7,
    "name": "Do homework",
    "description": "This math doesn't calculate itself!",
    "isFinished": false,
    "listId": 4
},
{
    "id": 8,
    "name": "Haircut",
    "description": "This hair doesn't cut itself!",
    "isFinished": false,
    "listId": 4
},
{
    "id": 9,
    "name": "Clean toilet",
    "description": "Mom says you need to clean the toilet!",
    "isFinished": true,
    "listId": 5
},
{
    "id": 10,
    "name": "Vacuum the living room",
    "description": "The living room is a mess!",
    "isFinished": true,
    "listId": 5
},
{
    "id": 11,
    "name": "Trip to the Moon",
    "description": "I have always wanted to go to the Moon!",
    "isFinished": false,
    "listId": 6
},
{
    "id": 12,
    "name": "Scuba diving in the Caribbean",
    "description": "Hire an instructor to learn how to dive!",
    "isFinished": true,
    "listId": 6
},
{
    "id": 13,
    "name": "Buy a puppy!",
    "description": "I have always wanted an English bulldog!",
    "isFinished": false,
    "listId": 7
},
{
    "id": 14,
    "name": "Trip to Japan",
    "description": "A picture wearing a samurai costume!",
    "isFinished": true,
    "listId": 7
},
{
    "id": 15,
    "name": "Buy tickets for an NBA game",
    "description": "Let's go Lakers!",
    "isFinished": false,
    "listId": 8
},
{
    "id": 16,
    "name": "Road trip to USA",
    "description": "From east coast to west coast!",
    "isFinished": true,
    "listId": 8
}]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask('');
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const enterBoard = (index) => {
    setState("lists");
    setBoardId(index);
  }
  
  const enterList = (index) => {
    setState("tasks");
    setListId(index);
  }

  const renderItems = (id=0) => {
    if (state=='home'){
      console.log('you are at home');
      return (
        <View>
            <View>
            <Text>You are at home</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setState("boards")}>
              <View style={styles.addWrapper}>
              <Text style={styles.addText}>Go to boards</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    else if (state=='boards'){
      console.log('you are at home');
      return (<View style={styles.items}>
        {/* This is where the items will go */}
        {
          boardList.map((item, index) => {
            return (
              <TouchableOpacity key={item.id} onPress={() => enterBoard(item.id)}>
                <Task key={item.id} text={item.name+' '+item.id}/>
              </TouchableOpacity>
            )
          })
        }
      </View>)
    }
    else if (state=='lists'){
      console.log('go to list with id: ', listId);
      return (<View style={styles.items}>
        {/* This is where the items will go */}
        {
          listList.map((item, index) => {
            if(item.boardId == boardId){return (
              <TouchableOpacity key={item.id} onPress={() => enterList(item.id)}>
                <Task key={item.id} text={item.name+' '+item.id}/>
              </TouchableOpacity>
            )}
          })
        }
      </View>)
    }
    else if (state=='tasks'){
      console.log('go to list tasks with id: ', listId);
      return (<View style={styles.items}>
        {/* This is where the items will go */}
        {
          taskList.map((item, index) => {
            if(item.listId == listId){return (
              <TouchableOpacity key={item.id} onPress={() => deleteTask(item.id)}>
                <Task key={item.id} text={item.name+' '+item.id}/>
              </TouchableOpacity>
            )}
          })
        }
      </View>)
    }else{
      console.log("where are you");
    }
  }
    
  const testingVariablesAndFunctions = () => {
    console.log('this function works');
    console.log(state);
  }

  return (
    <View style={styles.container}>

      {/* Today's Tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
      
        <View style={styles.items}>
          {/* This is where the items will go */}
          {
            <View style={styles.container}>
            { renderItems() }
            </View>
          }
        </View>
      
      </View>

      {/* Write a task section */}
      <KeyboardAvoidingView behaviour={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  items: {},
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#fff',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 60,
  },
  addText: {

  }
});
