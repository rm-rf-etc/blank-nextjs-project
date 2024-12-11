'use client'
import { Avatar, Checkbox, Group, ScrollArea, Table, Text } from '@mantine/core'
import { User } from '@prisma/client'
import cx from 'clsx'
import { useState } from 'react'
import classes from './UsersTable.module.css'

export function TableWithSelections({ users }: { users: User[] }) {
  const [selection, setSelection] = useState<string[]>([])

  const toggleRow = (id: string) => (
    setSelection(cur => cur.includes(id) ? cur.filter((item) => item !== id) : [...cur, id])
  )
  const toggleAll = () => (
    setSelection(
      cur => cur.length === users.length ? [] : users.map(({ id }) => String(id)),
    )
  )

  return (
    <ScrollArea>
      <Table verticalSpacing='sm'>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={40}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === users.length}
                indeterminate={selection.length > 0 && selection.length !== users.length}
              />
            </Table.Th>
            <Table.Th>User</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Job</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {users.map(({ id, name, avatar, email, job }) => {
            const idString = id.toString()
            const selected = selection.includes(idString)
            return (
              <Table.Tr key={id} className={cx({ [classes.rowSelected]: selected })}>
                <Table.Td>
                  <Checkbox
                    checked={selection.includes(idString)}
                    onChange={() => toggleRow(idString)}
                  />
                </Table.Td>
                <Table.Td>
                  <Group gap='sm'>
                    <Avatar size={26} src={avatar} radius={26} />
                    <Text size='sm' fw={500}>
                      {name}
                    </Text>
                  </Group>
                </Table.Td>
                <Table.Td>{email}</Table.Td>
                <Table.Td>{job}</Table.Td>
              </Table.Tr>
            )
          })}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  )
}
