import React from 'react';
import { ButtonBox, Button, TodoContainer } from './style.js';

const Todo = ( {todo, onDeleteHanlder, onCompleteHandler} ) => {
  
  const cancelHandler = () => ( todo.isDone ? "취소" : "완료" );
  
  return (
    <TodoContainer>
      <h2>{todo.title}</h2>
      <h4>{todo.body}</h4>
      <ButtonBox>
        <Button onClick={() => onDeleteHanlder(todo.id)}>삭제하기</Button>
        <Button onClick={() => onCompleteHandler(todo.id)}>{cancelHandler()}</Button>
      </ButtonBox>
    </TodoContainer>
  )
}

export default Todo;
