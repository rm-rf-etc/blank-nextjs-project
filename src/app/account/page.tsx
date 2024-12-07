import { Title } from '@mantine/core'
import { ForgotPassword } from '@/components/ForgotPassword/ForgotPassword'
import styles from '@/app/styles.module.css'

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
