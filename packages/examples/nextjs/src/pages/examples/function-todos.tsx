import { FunctionComponent } from 'react';
import FunctionTodos from '@src/components/function-todos';
import Link from 'next/link';

export type TodosPageProps = {}

const TodosPage: FunctionComponent<TodosPageProps> = () => {
  return (
    <>
      <Link href="/">
        <a>Home page</a>
      </Link>

      <FunctionTodos />
    </>
  )
}

export default TodosPage;