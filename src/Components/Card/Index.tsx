import React, {useState} from 'react'
import { ArrowFatLeft, ArrowFatRight, Trash, NotePencil } from "phosphor-react";
import { toast } from 'react-toastify';

import {Container, Header, Footer, Label, TextArea} from './style';
import { deleteCard, updateCard } from '../../Service/api';

import {CardTypeParam} from '../../Types/CardType';


export default function Card({id, titulo, conteudo, lista, cardAdd, cardEdit, cardId}: any) {

  const updateCardStatus = async (status: string) => {
    await updateCard({
      id,
      titulo,
      conteudo,
      lista: status
    })

    cardAdd(true);
  }

  const handleLeftButton = async () => {
    if(lista === 'ToDo')
      toast.error("Alteração de status não permitida!");
          
    if(lista === 'Doing'){
      updateCardStatus('ToDo');
      toast.success("Card alterado com sucesso!");
    }

    if(lista === 'Done'){
      updateCardStatus('Doing');
      toast.success("Card alterado com sucesso!");
    }
  }

  const handleRightButton = async () => {
    if(lista === 'ToDo'){
      updateCardStatus('Doing');
      toast.success("Card alterado com sucesso!");
    }

    if(lista === 'Doing'){
      updateCardStatus('Done');
      toast.success("Card alterado com sucesso!");
    }

    if(lista === 'Done'){
      toast.error("Alteração de status não permitida!");
    }
  }

  const handleTrashButton = async () => {
    await deleteCard(id);
    cardAdd(true);
    toast.success("Card excluído com sucesso!");
  }

  const handleEditButton = async () => {
    cardEdit(true);
    cardId(id);
  }
  
  return (
    <Container>
      <Header Status={lista}>
        <Label >{titulo}</Label>
        <button onClick={handleEditButton}>
          <NotePencil size={32} weight="bold" />
        </button>
      </Header>
      <TextArea>{conteudo}</TextArea>
      <Footer>
        <button onClick={handleLeftButton}>
          <ArrowFatLeft size={32} weight="bold" />
        </button>

        <button onClick={handleTrashButton}>
          <Trash size={32} weight="bold" />
        </button>

        <button onClick={handleRightButton}>
          <ArrowFatRight size={32} weight="bold" />
        </button>
      </Footer>
    </Container>
  )
}
