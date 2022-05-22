import React, {useState} from 'react'
import { Plus } from "phosphor-react";

import { ToastContainer, toast } from 'react-toastify';

import {Container, Input, TextArea, PlusButton} from './style';
import { createCard } from '../../Service/api';

export default function NewCard({cardAdd}: any) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  //const sucesso = () => toast.success("sucesso", {autoClose: 2000});

  const handleTitleChange = (value: string) => {
    console.log(value);
    setTitle(value);
  }

  const handleContentChange = (value: string) => {
    console.log(value);
    setContent(value);
  }

  const submitCard = async () => {
    const response = await createCard({
      titulo: title, 
      conteudo: content, 
      lista: 'ToDo'
    });

    console.log('response', response);

    if(response){
      console.log('sucesso');
      //sucesso();
      cardAdd(true);
      setTitle('');
      setContent('');
    }
     
  }

  return (
    <Container>
      <Input type="text" value={title} placeholder="Título" onChange={(e) => handleTitleChange(e.target.value)}/>
      <TextArea value={content} placeholder="Conteúdo" onChange={(e) => handleContentChange(e.target.value)}/>
      <PlusButton onClick={submitCard}>
        <Plus size={32} weight="bold" />
      </PlusButton>
      <ToastContainer />
    </Container>
    
  )
}
