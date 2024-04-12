import { useForm } from "../hooks"

export const TodoAdd = ({onNewTodo}) => {
  
    const {description, onInputChange, onReset} = useForm ({
        description: '',
    })
  
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done:false,
            description: description,
        }

        onNewTodo(newTodo);
        onReset();
    }

    

    return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text" 
            placeholder="¿Que hay que hacer?"
            className="form-control"
            name="description"
            value={description}
            onChange={onInputChange}
        />

        <button 
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar
        </button>
    </form>
  )
}
