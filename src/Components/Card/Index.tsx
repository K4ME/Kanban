import React, {useState} from 'react'
import { ArrowFatLeft, ArrowFatRight, Trash, NotePencil } from "phosphor-react";

import {Container, Header, Footer, Label, TextArea} from './style';

interface cardType {
  titulo: string;
  conteudo: string;
}

export default function Card({titulo, conteudo}: cardType) {

  return (
    <Container>
      <Header>
        <Label >{titulo}</Label>
        <button>
          <NotePencil size={32} weight="bold" />
        </button>
      </Header>
      <TextArea>{conteudo}</TextArea>
      <Footer>
        <button>
          <ArrowFatLeft size={32} weight="bold" />
        </button>
        <button>
        <Trash size={32} weight="bold" />
        </button>
        <button>
          <ArrowFatRight size={32} weight="bold" />
        </button>
      </Footer>
    </Container>
  )
}
