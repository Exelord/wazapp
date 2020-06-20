import { FunctionComponent } from 'react';
import Link from 'next/link';

export type IndexPageProps = {}

const IndexPage: FunctionComponent<IndexPageProps> = () => {
  return (
    <>
      <Link href="/examples/class-todos">
        <a>Class Todos</a>
      </Link>

      <Link href="/examples/function-todos">
        <a>Function Todos</a>
      </Link>
    </>
  )
}

export default IndexPage;