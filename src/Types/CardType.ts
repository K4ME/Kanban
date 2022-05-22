import {useState} from 'react'

export interface CardType {
  id?: string
  titulo: string;
  conteudo: string;
  lista: string;
}

export interface CardTypeParam {
  id?: string
  titulo: string;
  conteudo: string;
  lista: string;
  cardAdd: boolean;
}