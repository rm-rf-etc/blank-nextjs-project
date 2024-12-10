import { Box, Group, Paper, ProgressLabel, ProgressRoot, ProgressSection, SimpleGrid, Text } from '@mantine/core'
import { IconArrowUpRight, IconDeviceAnalytics } from '@tabler/icons-react'
import classes from './StatsSegments.module.css'

const data = [
  { label: 'Mobile', count: '204,001', part: 59, color: '#47d6ab' },
  { label: 'Desktop', count: '121,017', part: 35, color: '#03141a' },
  { label: 'Tablet', count: '31,118', part: 6, color: '#4fcdf7' },
]

export function StatsSegments() {
  return (
    <Paper withBorder p='md' radius='md'>
      <Group justify='space-between'>
        <Group align='flex-end' gap='xs'>
          <Text fz='xl' fw={700}>
            345,765
          </Text>
          <Text c='teal' className={classes.diff} fz='sm' fw={700}>
            <span>18%</span>
            <IconArrowUpRight size={16} style={{ marginBottom: 4 }} stroke={1.5} />
          </Text>
        </Group>
        <IconDeviceAnalytics size={22} className={classes.icon} stroke={1.5} />
      </Group>

      <Text c='dimmed' fz='sm'>
        Page views compared to previous month
      </Text>

      <ProgressRoot classNames={{ label: classes.progressLabel }} size={34} mt={20}>
        {data.map((segment) => (
          <ProgressSection value={segment.part} color={segment.color} key={segment.color}>
            {segment.part > 10 && <ProgressLabel>{segment.part}%</ProgressLabel>}
          </ProgressSection>
        ))}
      </ProgressRoot>
      <SimpleGrid cols={{ base: 1, xs: 3 }} mt='lg'>
        {data.map((stat) => (
          <Box
            key={stat.label}
            style={{ borderBottomColor: stat.color }}
            className={classes.stat}
          >
            <Text tt='uppercase' fz='xs' c='dimmed' fw={700}>
              {stat.label}
            </Text>

            <Group justify='space-between' align='flex-end' gap={0}>
              <Text fw={700}>{stat.count}</Text>
              <Text c={stat.color} fw={700} size='sm' className={classes.statCount}>
                {stat.part}%
              </Text>
            </Group>
          </Box>
        ))}
      </SimpleGrid>
    </Paper>
  )
}
