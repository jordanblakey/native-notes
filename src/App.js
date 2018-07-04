import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView,
  Image
} from 'react-native'
import firebase from 'firebase'
import nn_icon from './img/icon.png'
// import firebase from 'firebase/app'
// import 'firebase/database'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    firebase.initializeApp({
      databaseURL: 'https://native-notes-2b16e.firebaseio.com'
    })
    const database = firebase.database()

    this.itemsRef = database.ref().child('Notes')

    // this.items = {
    //   'Note Title': {
    //     title: 'Hello2',
    //     author: 'Jordan Blakey'
    //   },
    //   'Note Title 2': {
    //     key: 'value'
    //   }
    // }

    this.items = []

    // this.itemsRef.set(this.items)

    this.state = {
      newToDo: '',
      todoSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  componentDidMount() {
    this.itemsRef.on('child_added', dataSnapshot => {
      this.items.push({ id: dataSnapshot.key, text: dataSnapshot.val() })
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      })
    })

    this.itemsRef.on('child_removed', dataSnapshot => {
      this.items = this.items.filter(x => x.id !== dataSnapshot.key)
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      })
    })
  }

  addToDo() {
    if (this.state.newToDo !== '') {
      this.itemsRef.push({
        todo: this.state.newToDo
      })
      this.setState({
        newToDo: ''
      })
    }
  }

  removeToDo(rowData) {
    this.itemsRef.child(rowData.id).remove()
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleView}>
          <Image style={styles.nnIcon} source={nn_icon} />
          <Text style={styles.titleText}>Native Notes</Text>
        </View>
        <View style={styles.pageBody}>
          <View style={styles.introTextView}>
            <Text style={styles.introText}>
              Start typing to add a new to-do.
            </Text>
            <Text style={styles.introText}>To remove, tap the to-do.</Text>
          </View>
          <TextInput
            style={[styles.input, styles.textInput]}
            onChangeText={text => this.setState({ newToDo: text })}
            value={this.state.newToDo}
          />
          <TouchableHighlight
            style={[styles.input, styles.button]}
            onPress={() => this.addToDo()}
            underlayColor="#ddd"
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
          <ListView
            dataSource={this.state.todoSource}
            renderRow={this.renderRow.bind(this)}
            style={styles.listView}
          />
        </View>
      </View>
    )
  }

  renderRow(rowData) {
    console.log('Added Row:', rowData)
    return (
      <TouchableHighlight
        style={styles.todoRow}
        underlayColor="#dddddd"
        onPress={() => this.removeToDo(rowData)}
      >
        <View style={styles.row}>
          <Text style={styles.todoText}>{rowData.text.todo}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center'
  },
  titleView: {
    backgroundColor: '#6D3CFF',
    width: '100%',
    padding: 20,
    paddingTop: 46,
    flexDirection: 'row'
  },
  nnIcon: {
    opacity: 1,
    width: 36,
    height: 36,
    marginRight: 10
  },
  titleText: {
    color: '#FFF',
    fontSize: 30
  },
  pageBody: {
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    width: '100%'
  },
  introTextView: {
    marginTop: 30,
    marginBottom: 10,
    width: '90%',
    alignItems: 'flex-start'
  },
  introText: {
    width: '90%'
  },
  input: {
    padding: 5,
    width: '90%',
    marginTop: 10,
    borderRadius: 3
  },
  textInput: {
    backgroundColor: '#FFF',
    padding: 10
  },
  button: {
    backgroundColor: '#6D3CFF',
    marginTop: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    padding: 5,
    fontWeight: '700',
    fontSize: 16
  },
  listView: {
    width: '90%',
    paddingTop: 30,
    flexGrow: 0
  },
  todoRow: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    marginBottom: 2,
    padding: 8,
    borderRadius: 3
  },
  todoText: {
    color: '#000'
  }
})
