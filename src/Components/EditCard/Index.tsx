import React, {useState} from 'react'
import { Prohibit, FloppyDisk } from "phosphor-react";

import {Container, Footer, Input, TextArea} from './style';

export default function EditCard() {
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

  return (
    <Container>
      <Input type="text" placeholder="Título" onChange={(e) => handleTitleChange(e.target.value)}/>
      <TextArea placeholder="Conteúdo" onChange={(e) => handleContentChange(e.target.value)}/>
      <Footer>
        <button>
          <Prohibit size={32} weight="bold" />
        </button>
        <button>
          <FloppyDisk size={32} weight="bold" />
        </button>
      </Footer>
    </Container>
  )
}
