import { Center, Group, Paper, RingProgress, SimpleGrid, Text } from '@mantine/core'
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react'

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
}

// <SimpleGrid cols={{ base: 1, sm: 2 }}>
const data = [
  { label: 'Messages Flagged', stats: '9', progress: Math.round(9 / 38 * 100), color: 'red', icon: 'up' },
  { label: 'Messages Passed', stats: '27', progress: Math.round(27 / 38 * 100), color: 'green', icon: 'up' },
  { label: 'Hours Worked This Month', stats: '328', progress: 45, color: 'blue', icon: 'up' },
] as const

export function StatsRings() {
  return (
    <SimpleGrid cols={2} h='100%'>
      {data.map(({ progress, color, label, stats, icon }) => {
        const Icon = icons[icon]
        return (
          <Paper withBorder radius='md' p='xs' key={label}>
            <Group>
              <RingProgress
                size={80}
                roundCaps
                thickness={8}
                sections={[{ value: progress, color }]}
                label={
                  <Center>
                    <Icon size={20} stroke={1.5} />
                  </Center>
                }
              />

              <div>
                <Text c='dimmed' size='xs' tt='uppercase' fw={700}>
                  {label}
                </Text>
                <Text fw={700} size='xl'>
                  {stats}
                </Text>
              </div>
            </Group>
          </Paper>
        )
      })}
    </SimpleGrid>
  )
}
