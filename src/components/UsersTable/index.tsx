import { actionGetAllUsers } from '@/app/actions'
import { TableWithSelections } from './UsersTable'

export default async () => {
  return <TableWithSelections users={await actionGetAllUsers()} />
}
