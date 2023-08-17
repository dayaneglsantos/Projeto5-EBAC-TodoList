import BotaoAdicionar from '../../components/BotaoCadastrar'
import ListaTarefas from '../../containers/Lista de Tarefas'
import Aside from '../../containers/aside'

const Home = () => (
  <>
    <Aside />
    <ListaTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
