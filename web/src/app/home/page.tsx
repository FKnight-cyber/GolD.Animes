import Header from "@/components/Header"
import { Container } from "./style"
import Carousel from "@/components/Carousel"

export default function Home() {
  return (
    <Container>
      <Header />
      <Carousel />
    </Container>
  )
}