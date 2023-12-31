import styled, { createGlobalStyle } from 'styled-components'
import { Cores } from './cores'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.div`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.p`
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Input = styled.input`
  border-radius: 8px;
  color: #666;
  border-color: #666;
  font-weight: bold;
  padding: 8px;
  background-color: #fff;
  width: 100%;
  font-size: 14px;
`

export const Botao = styled.button`
  background-color: ${Cores.azulEscuro};
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${Cores.verde};
`

export default EstiloGlobal
