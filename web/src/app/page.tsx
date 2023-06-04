import { Container } from './style'
import MainMobileHeader from '@/components/Mobile/MainMobileHeader'

export default function Home() {
  return (
    <Container>
      <MainMobileHeader />
      <div className="share">
        <h2>Share GolD.</h2>
        <h6>with your friends</h6>
      </div>
    </Container>
  )
}
