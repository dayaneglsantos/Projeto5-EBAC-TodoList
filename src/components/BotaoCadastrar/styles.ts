import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Cores } from '../../styles/cores'

export const BotaoAdd = styled(Link)`
  height: 64px;
  width: 64px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  background-color: ${Cores.verde};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-size: 40px;
`
