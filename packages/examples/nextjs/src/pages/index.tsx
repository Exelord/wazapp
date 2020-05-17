import { FunctionComponent } from 'react';
import TodoList from "@app/components/todo-list";
import UserProfile from '@app/components/user-profile';

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