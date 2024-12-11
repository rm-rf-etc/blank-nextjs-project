import { StatsRings } from '@/components/DashboardStats/StatsRings'
import { StatsSegments } from '@/components/DashboardStats/StatsSegments'
import styles from './page.module.css'

export default () => (
  <div className={styles.grid}>
    <StatsSegments />
    <StatsRings />
  </div>
)
