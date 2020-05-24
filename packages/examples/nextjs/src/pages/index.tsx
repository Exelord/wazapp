import { FunctionComponent } from 'react';
import TodoList from "@src/components/todo-list";
import UserProfile from '@src/components/user-profile';

export type IndexPageProps = {}

const IndexPage: FunctionComponent<IndexPageProps> = () => {
  return (
    <>
      <UserProfile />
      <TodoList />
    </>
  )
}

export default IndexPage;