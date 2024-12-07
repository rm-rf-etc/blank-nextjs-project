'use client'
import { useState, ForwardRefExoticComponent, RefAttributes } from 'react'
import {
  IconGauge,
  IconSettings,
  IconUser,
  IconProps,
  Icon,
  IconMessageExclamation,
} from '@tabler/icons-react'
import { Tooltip, UnstyledButton } from '@mantine/core'
import { useRouter } from 'next/navigation'
import styles from './Navbar.module.css'

type LinkModel = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
  label: string
  path?: string
}
const mainLinksMockdata: LinkModel[] = [
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconMessageExclamation, label: 'Messages' },
  { icon: IconUser, label: 'Account' },
  { icon: IconSettings, label: 'Settings' },
]

export function Navbar() {
  const router = useRouter()
  const [active, setActive] = useState(mainLinksMockdata[0])

  return (
    <div className={styles.aside}>
      {mainLinksMockdata.map((link) => (
        <Tooltip
          label={link.label}
          position="right"
          withArrow
          transitionProps={{ duration: 0 }}
          key={link.label}
        >
          <UnstyledButton
            className={styles.mainLink}
            data-active={link === active || undefined}
            onClick={() => {
              setActive(link)
              router.push(`/${link.label.toLowerCase()}`)
            }}
          >
            <link.icon size={22} stroke={1.5} />
          </UnstyledButton>
        </Tooltip>
      ))}
    </div>
  )
}
