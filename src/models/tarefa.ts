import * as Enums from '../utils/enums/tarefa'

class Tarefa {
  titulo: string
  prioridade: Enums.Prioridade
  descricao: string
  status: Enums.Status
  id: number

  constructor(
    titulo: string,
    prioridade: Enums.Prioridade,
    descricao: string,
    status: Enums.Status,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.descricao = descricao
    this.status = status
    this.id = id
  }
}

export default Tarefa
