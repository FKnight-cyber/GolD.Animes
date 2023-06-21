import { Container } from './style'

import DeskMenu from '@/components/DeskMenu'
import MainMobileHeader from '@/components/MainHeader'
import ShareBar from '@/components/ShareBar'

export default function Main() {
  return (
    <Container>
      <DeskMenu />
      <MainMobileHeader />
      <ShareBar isMain={true} element={<div className="bar"></div>} />
    </Container>
  )
}
