import { User } from './User';
import styles from './ui.module.scss'
import { Prisma } from '.prisma/schema-webapi/client/webapi'

export function UserList({ data }: Prisma.userSelect[]) {
  
  return (
    <div className={styles['container']}>
      {data.map( u => (
        <User user={ u } />
      ))}
{/* users */}
    </div>
  );
}

export default UserList;
