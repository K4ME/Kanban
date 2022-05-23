import React, {useState} from 'react'
import { Plus } from "phosphor-react";

import { toast } from 'react-toastify';

import {Container, Input, TextArea, PlusButton} from './style';
import { createCard } from '../../Service/api';

export default function NewCard({cardAdd}: any) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleTitleChange = (value: string) => {
    setTitle(value);
  }

  const handleContentChange = (value: string) => {
    setContent(value);
  }

  const verifyCardContent = () => {
    if(title === '' && content === ''){
      toast.error("Título e conteúdo do Card em branco!");
      return;
    }

    if(title === ''){
      toast.error("Título do Card em branco!");
      return;
    }

    if(content === ''){
      toast.error("Conteúdo do Card em branco!");
      return;
    }
  }

  const submitCard = async () => {
    verifyCardContent();

    const response = await createCard({
      titulo: title, 
      conteudo: content, 
      lista: 'ToDo'
    });

    if(response){
      toast.success("Card Criado com sucesso!");
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
    </Container>
    
  )
}
