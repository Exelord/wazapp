import { FunctionComponent } from 'react';
import TodoList from "@app/components/todo-list";

export type IndexPageProps = {}

const IndexPage: FunctionComponent<IndexPageProps> = () => {
  return (
    <TodoList />
  )
}

export default IndexPage;