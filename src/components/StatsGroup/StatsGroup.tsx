import { Text } from '@mantine/core'
import classes from './StatsGroup.module.css'

const data = [
  {
    title: 'Messages Passed',
    stats: '27',
    description: '24% more than in the same month last year, 33% more that two years ago',
  },
  {
    title: 'Messages Flagged',
    stats: '9',
    description: '13% less compared to last month, 6% more than last year',
  },
  {
    title: 'Total Handled',
    stats: '36',
    description: '1994 orders were completed this month, 97% satisfaction rate',
  },
]

export function StatsGroup() {
  return (
    <div className={classes.root}>
      {data.map((stat) => (
        <div key={stat.title} className={classes.stat}>
          <Text className={classes.count}>{stat.stats}</Text>
          <Text className={classes.title}>{stat.title}</Text>
          <Text className={classes.description}>{stat.description}</Text>
        </div>
      ))}
    </div>
  )
}
