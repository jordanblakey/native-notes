import React from 'react'
import {
  ListView,
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'

import { firebase_db, firebase_init } from '../../utils/FirebaseInit'

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

    this.itemsRef = firebase_db.ref().child('Notes')
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
        style={styles.todoRow}
        underlayColor="#BBB"
        onPress={() => this.removeToDo(rowData)}
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
          placeholder="What's on your mind?"
          label="Note"
          onChangeText={text => this.setState({ newToDo: text })}
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
