import { StatsRings } from '@/components/DashboardStats/StatsRings'
import { StatsSegments } from '@/components/DashboardStats/StatsSegments'
import { Group } from '@mantine/core'

export default () => (
  <Group align='stretch'>
    <StatsSegments />
    <StatsRings />
  </Group>
)
