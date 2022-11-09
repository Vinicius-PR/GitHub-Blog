import { FormContainer } from './styles'

export function Form() {
  return (
    <FormContainer>
      <div>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>

      <form action="">
        <input type="text" placeholder="Buscar Conteúdo" />
      </form>
    </FormContainer>
  )
}
