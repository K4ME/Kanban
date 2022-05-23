import React, {useEffect, useState} from 'react'

import Card from '../Card/Index'
import EditCard from '../EditCard/Index'
import NewCard from '../NewCard'

import { getCards } from '../../Service/api'

import {Container, New, ToDo, Doing, Done} from './style';

import {CardType} from '../../Types/CardType';

export default function Board() {
  const [cards, setCards] = useState<CardType[]>();
  const [newCard, setNewCard] = useState<boolean>(false);
  const [editCard, setEditCard] = useState<boolean>(false);
  const [idCard, setIdCard] = useState<string>('');

  useEffect(() => {
    async function loadCards() {
      const response = await getCards();
      setCards(response);
      setNewCard(false);
    }

    loadCards()
  }, [newCard]);
  
  return (
      <Container>
        <New>
          <h1>New</h1>
          <NewCard cardAdd={setNewCard}/>
        </New>
        
        <ToDo>
          <h1>To Do</h1>
          {
            cards ? cards.map((card) => (
              card.lista === 'ToDo' ? 
                editCard === true && idCard === card.id ? 
                  <EditCard 
                    key={card.id} 
                    id={card.id} 
                    titulo={card.titulo} 
                    conteudo={card.conteudo}
                    lista={card.lista}
                    cardAdd={setNewCard}
                    cardEdit={setEditCard}
                    cardId={setIdCard}
                  />

                : <Card 
                  key={card.id} 
                  id={card.id} 
                  titulo={card.titulo} 
                  conteudo={card.conteudo}
                  lista={card.lista}
                  cardAdd={setNewCard}
                  cardEdit={setEditCard}
                  cardId={setIdCard}
                />
              : <div />
            )) 
            : <div />
          }
        </ToDo>

        <Doing>
          <h1>Doing</h1>
          {
            cards ? cards.map((card) => (
              card.lista === 'Doing' ? 
                editCard === true && idCard === card.id ? 
                  <EditCard 
                    key={card.id} 
                    id={card.id} 
                    titulo={card.titulo} 
                    conteudo={card.conteudo}
                    lista={card.lista}
                    cardAdd={setNewCard}
                    cardEdit={setEditCard}
                    cardId={setIdCard}
                  />

                : <Card 
                  key={card.id} 
                  id={card.id} 
                  titulo={card.titulo} 
                  conteudo={card.conteudo}
                  lista={card.lista}
                  cardAdd={setNewCard}
                  cardEdit={setEditCard}
                  cardId={setIdCard}
                />
              : <div />
            )) 
            : <div />
          }
        </Doing>

        <Done>
          <h1>Done</h1>
          {
            cards ? cards.map((card) => (
              card.lista === 'Done' ? 
                editCard === true && idCard === card.id ? 
                  <EditCard 
                    key={card.id} 
                    id={card.id} 
                    titulo={card.titulo} 
                    conteudo={card.conteudo}
                    lista={card.lista}
                    cardAdd={setNewCard}
                    cardEdit={setEditCard}
                    cardId={setIdCard}
                  />

                : <Card 
                  key={card.id} 
                  id={card.id} 
                  titulo={card.titulo} 
                  conteudo={card.conteudo}
                  lista={card.lista}
                  cardAdd={setNewCard}
                  cardEdit={setEditCard}
                  cardId={setIdCard}
                />
              : <div />
            )) 
            : <div />
          }
        </Done>
        
      </Container>
  )
}
