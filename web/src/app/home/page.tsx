import Header from "@/components/Header"
import { Container } from "./style"
import Spotlight from "@/components/Spotlight"
import Trending from "@/components/Trending"

export default function Home() {
  return (
    <Container>
      <Header />
      <Spotlight />
      <div className="topic">
        <h1>Trending</h1>
      </div>
      <Trending />
    </Container>
  )
}