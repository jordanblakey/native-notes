import React from 'react'
import {
  ListView,
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'

import firebase from '../../utils/FirebaseInit'
import 'firebase/database'

import Input from '../form/Input'
import Button from '../form/Button'

export default class ToDo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newToDo: '',
      todoSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }

    this.itemsRef = firebase
      .database()
      .ref()
      .child('Notes')
    this.items = []
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
      console.log('Added Row:', this.state.newToDo)
      this.setState({
        newToDo: ''
      })
    }
  }

  removeToDo(rowData) {
    this.itemsRef.child(rowData.id).remove()
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        onPress={() => this.removeToDo(rowData)}
        style={styles.todoRow}
        underlayColor="#BBB"
      >
        <View style={styles.row}>
          <Text style={styles.todoText}>{rowData.text.todo}</Text>
          <Text>X</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          label="Note"
          onChangeText={text => this.setState({ newToDo: text })}
          placeholder="What's on your mind?"
          value={this.state.newToDo}
        />
        <Button onPress={() => this.addToDo()}>Add</Button>
        <ListView
          dataSource={this.state.todoSource}
          renderRow={this.renderRow.bind(this)}
          style={styles.listView}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  listView: {
    width: '100%',
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  todoText: {
    color: '#000'
  }
})
