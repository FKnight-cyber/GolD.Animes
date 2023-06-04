import { Container } from './style'

import DeskMenu from '@/components/DeskMenu'
import MainMobileHeader from '@/components/MainHeader'

export default function Home() {
  return (
    <Container>
      <DeskMenu />
      <MainMobileHeader />
      <div className="share">
        <div className="bar"></div>
        <div className="text">
          <h2>Share GolD.</h2>
          <h6>with your friends</h6>
        </div>
      </div>
    </Container>
  )
}
