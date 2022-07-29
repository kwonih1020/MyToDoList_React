// eslint-disable-next-line

import React from 'react';
import { Button, FormStyled, Label, Input } from './style.js';

const Form = ( { onChangeHandlerInput, title, body, onClickHandler} ) => {
  return (
    <FormStyled>
      <Label>제목</Label>
      <Input type="text" name="title" onChange={onChangeHandlerInput} value={title}></Input>
      <Label>내용</Label>
      <Input type="text" name="body" onChange={onChangeHandlerInput} value={body}></Input>
      <Button onClick={onClickHandler}>추가하기</Button>
    </FormStyled>
  )
}

export default Form;
