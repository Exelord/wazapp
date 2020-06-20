import { FunctionComponent } from 'react';
import ClassTodos from '@src/components/class-todos';
import Link from 'next/link';

export type TodosPageProps = {}

const TodosPage: FunctionComponent<TodosPageProps> = () => {
  return (
    <>
      <Link href="/">
        <a>Home page</a>
      </Link>

      <ClassTodos />
    </>
  )
}

export default TodosPage;