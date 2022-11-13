import { FormContainer } from './styles'
import { useForm } from 'react-hook-form'

interface FormProps {
  amountOfPost: number
  fetchPosts: (query?: string) => Promise<void>
}

interface InputProps {
  query: string
}

export function Form({ amountOfPost, fetchPosts }: FormProps) {
  const { register, handleSubmit } = useForm<InputProps>()

  function handleFetch(data: InputProps) {
    fetchPosts(data.query)
  }

  return (
    <FormContainer>
      <div>
        <h3>Publicações</h3>
        <span>{amountOfPost} publicações</span>
      </div>

      <form onSubmit={handleSubmit(handleFetch)}>
        <input
          type="text"
          placeholder="Buscar Conteúdo"
          {...register('query')}
        />
      </form>
    </FormContainer>
  )
}
