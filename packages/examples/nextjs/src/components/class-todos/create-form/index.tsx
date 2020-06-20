import { ClassComponent } from "@wazapp/component";
import { action, observable } from "@wazapp/tracking";
import { ChangeEvent, FormEvent } from "react";
import { TodoItem } from "@src/components/class-todos";
import { guidFor } from "@wazapp/utils";

type FormObject = {
  [key: string]: any;
}

export type CreateFormProps = {
  onCreate: (todo: TodoItem) => void
}

export default class CreateForm extends ClassComponent<CreateFormProps> {
  @observable formObject: FormObject = {
    title: ''
  }

  template({}, { addTodo, formObject, onChange }: this) {
    return (
      <form onSubmit={addTodo}>
        <label htmlFor={guidFor(this, 'title')}>Title</label>
        <input
          required
          type="text"
          id={guidFor(this, 'title')}
          name="title"
          placeholder="Todo title"
          value={formObject.title} 
          onChange={onChange} />
      </form>
    );
  }

  @action
  addTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { title } = this.formObject;

    const todo = {
      title,
      done: false
    } as TodoItem

    this.props.onCreate(todo);

    this.formObject = { title: '' };
  }

  @action
  onChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    this.formObject[name] = value;
  }
}