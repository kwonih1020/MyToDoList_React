// eslint-disable-next-line

import React, { useState, useRef } from 'react';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import LayoutContainer from './style.js';

const Layout = () => {
  const [inputs, setInputs] = useState({
    title: '',
    body: ''
  });

  const onChangeHandlerInput = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs,
      [name]: value
    })
    console.log(e.target.name)
  };

  const [todos, setTodos] = useState([
    {
      id: 0, 
      title: '개인과제', 
      body: '스스로 개인과제 완성하기', 
      isDone: false
    },
    {
      id: 1,
      title: '예방접종', 
      body: '아기 데리고 병원가지', 
      isDone: true
    }
  ]);

  const { title, body } = inputs;
  // 비구조화 할당을 통해 값 추출
  // title, body만 변수로 뽑아내기

  const nextId = useRef(2);

  const onClickHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      id: nextId.current,
      title: title,
      body: body,
      isDone: false,
    }]);
    nextId.current +=1;
    setInputs({
      title: '',
      body: ''
    });
  };

  return (
    <LayoutContainer>
      <Header />
      <Form onChangeHandlerInput={onChangeHandlerInput} 
            onClickHandler={onClickHandler}
            title={title}
            body={body}
      />
      <List todos={todos} 
            setTodos={setTodos}  
      />
    </LayoutContainer>
  );
}

export default Layout;
