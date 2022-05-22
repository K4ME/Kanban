import React, {useState} from 'react'
import { Prohibit, FloppyDisk } from "phosphor-react";

import {Container, Footer, Input, TextArea} from './style';
import { updateCard } from '../../Service/api';

export default function EditCard({id, titulo, conteudo, lista, cardAdd, cardEdit, cardId}: any) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleTitleChange = (value: string) => {
    console.log(value);
    setTitle(value);
  }

  const handleContentChange = (value: string) => {
    console.log(value);
    setContent(value);
  }

  const handleSave = async () => {
    await updateCard({
      titulo: title,
      conteudo: content,
      lista,
      id
    });
    cardEdit(false);
    cardId('');
    cardAdd(true);
  }

  const handleCancel = async () => {
    cardEdit(false);
    cardId('');
  }

  return (
    <Container>
      <Input type="text" placeholder="Título" onChange={(e) => handleTitleChange(e.target.value)}/>
      <TextArea placeholder="Conteúdo" onChange={(e) => handleContentChange(e.target.value)}/>
      <Footer>
        <button onClick={handleCancel}>
          <Prohibit size={32} weight="bold" />
        </button>
        <button onClick={handleSave}>
          <FloppyDisk size={32} weight="bold" />
        </button>
      </Footer>
    </Container>
  )
}
