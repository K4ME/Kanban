import React from 'react'
import Card from '../Card/Index'
import EditCard from '../EditCard/Index'
import NewCard from '../NewCard'

import {Container, New, ToDo, Doing, Done} from './style';

export default function Board() {
  return (
      <Container>
        <New>
          <NewCard />
        </New>
        
        <ToDo>
          <EditCard />
        </ToDo>

        <Doing>
          <EditCard />
        </Doing>

        <Done>
          <Card titulo='teste' conteudo='teste'/>
        </Done>
        
      </Container>
  )
}
