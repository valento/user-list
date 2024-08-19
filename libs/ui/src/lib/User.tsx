import { Prisma } from '.prisma/schema-webapi/client/webapi'


export function User( {user}: Prisma.userSelect) {
  
  return (
    <div>
      User: { user.name }, {user.email}
    </div>
  )
}