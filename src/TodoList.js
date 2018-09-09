import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from './store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  todoContainer: {
    flexDirection: 'row'
  },
});

const TodoList = ({ todos, addTodo, removeTodo }) =>
  (
    <View style={styles.container}>
      {todos.map(item => (
        <View key={item.id} style={styles.todoContainer}>
          <Text >{item.text}</Text>
          <TouchableOpacity onPress={() => { removeTodo(item.id) }}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity onPress={() => { addTodo('Listen slipknot') }}>
        <Text>Adicionar Todo</Text>
      </TouchableOpacity>
    </View>
  );


TodoList.propType = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
