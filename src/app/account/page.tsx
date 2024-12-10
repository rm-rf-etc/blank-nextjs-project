import styles from '@/app/styles.module.css'
import { ForgotPassword } from '@/components/ForgotPassword/ForgotPassword'
import { Title } from '@mantine/core'

export default () => {
  return (
    <>
      <Title className={styles.fatTitle}>
        Account
      </Title>
      <ForgotPassword />
    </>
  )
}
