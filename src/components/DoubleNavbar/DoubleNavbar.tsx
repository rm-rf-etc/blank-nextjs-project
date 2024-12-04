'use client'
import { useState } from 'react'
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser,
} from '@tabler/icons-react'
import { Title, Tooltip, UnstyledButton } from '@mantine/core'
import { MantineLogo } from '@mantinex/mantine-logo'
import classes from './DoubleNavbar.module.css'

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home', pages: ['Feed', 'Events', 'Orders'] },
  { icon: IconGauge, label: 'Dashboard', pages: ['Security', 'Alerts', 'Monitoring'] },
  {
    icon: IconDeviceDesktopAnalytics,
    label: 'Analytics',
    pages: ['Stats', 'Logs'],
  },
  {
    icon: IconCalendarStats, label: 'Releases', pages: [
      'Clients',
      'Databases',
      'Pull Requests',
      'Open Issues',
    ]
  },
  { icon: IconUser, label: 'Account', pages: [] },
  { icon: IconFingerprint, label: 'Security', pages: [] },
  { icon: IconSettings, label: 'Settings', pages: [] },
]

export function DoubleNavbar() {
  const [active, setActive] = useState(mainLinksMockdata[0])
  const [activeLink, setActiveLink] = useState('Settings')

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {mainLinksMockdata.map((link) => (
            <Tooltip
              label={link.label}
              position="right"
              withArrow
              transitionProps={{ duration: 0 }}
              key={link.label}
            >
              <UnstyledButton
                onClick={() => {
                  console.log('set menu', link.label)
                  setActive(link)
                }}
                className={classes.mainLink}
                data-active={link === active || undefined}
              >
                <link.icon size={22} stroke={1.5} />
              </UnstyledButton>
            </Tooltip>
          ))}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active.label}
          </Title>

          {active.pages.map((link) => (
            <a
              className={classes.link}
              data-active={activeLink === link || undefined}
              href="#"
              onClick={(event) => {
                event.preventDefault()
                console.log('set submenu', link)
                setActiveLink(link)
              }}
              key={link}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
