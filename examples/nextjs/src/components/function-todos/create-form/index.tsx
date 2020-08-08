import { FunctionComponent, useLocalStore } from "@wazapp/component";
import { ChangeEvent, FormEvent } from "react";
import { TodoItem } from "@src/components/function-todos";
import { guidFor } from "@wazapp/utils";

export type CreateFormProps = {
  onCreate: (todo: TodoItem) => void
}

type FormObject = {
  [key: string]: any;
}

const CreateForm: React.FunctionComponent<CreateFormProps> = (props) => {
  const store = useLocalStore(() => ({
    formObject: {
      title: ''
    } as FormObject,

    addTodo(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const { title } = this.formObject;
  
      const todo = {
        title,
        done: false
      } as TodoItem
  
      props.onCreate(todo);
  
      this.formObject = { title: '' };
    },

    onChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target;
  
      this.formObject[name] = value;
    }
  }));

  return (
    <form onSubmit={store.addTodo}>
      <label htmlFor={guidFor(store, 'title')}>Title</label>
      <input
        required
        type="text"
        id={guidFor(store, 'title')}
        name="title"
        placeholder="Todo title"
        value={store.formObject.title} 
        onChange={store.onChange} />
    </form>
  );
}

export default FunctionComponent(CreateForm);