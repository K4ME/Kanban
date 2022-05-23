import React, {useState} from 'react'
import { Prohibit, FloppyDisk } from "phosphor-react";
import { toast } from 'react-toastify';

import {Container, Footer, Input, TextArea} from './style';
import { updateCard } from '../../Service/api';

export default function EditCard({id, titulo, conteudo, lista, cardAdd, cardEdit, cardId}: any) {
  const [title, setTitle] = useState<string>(titulo);
  const [content, setContent] = useState<string>(conteudo);

  const handleTitleChange = (value: string) => {
    setTitle(value);
  }

  const handleContentChange = (value: string) => {
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
    toast.success("Card editado com sucesso!");
  }

  const handleCancel = async () => {
    cardEdit(false);
    cardId('');
  }

  return (
    <Container>
      <Input type="text" value={title} placeholder="Título" onChange={(e) => handleTitleChange(e.target.value)}/>
      <TextArea value={content} placeholder="Conteúdo" onChange={(e) => handleContentChange(e.target.value)}/>
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
