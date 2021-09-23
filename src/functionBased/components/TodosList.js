/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, handleChangeProps, deleteTodoProps, setUpdate } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};
// export default TodosList;

// const TodosList = (props) => {
//   console.log(props);
//   return (
//     <ul>
//       {props.todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           handleChangeProps={props.handleChangeProps}
//           deleteTodoProps={props.deleteTodoProps}
//           setUpdate={props.setUpdate}
//         />
//       ))}
//     </ul>
//   );
// };
export default TodosList;
