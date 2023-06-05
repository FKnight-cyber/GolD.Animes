import Header from "@/components/Header"
import { Container } from "./style"
import Carousel from "@/components/Carousel"

const slides = [
  {
    backgroundImage: 'https://img.zorores.com/_r/1366x768/100/e4/05/e4055651560b12f4f735657be1dc001f/e4055651560b12f4f735657be1dc001f.jpg',
    contentTitle: "Hell's paradise",
    releaseDate: '14/02/2022',
    description: "Gabimaru the Hollow, a ninja of Iwagakure Village known for being cold and emotionless, was set up by his fellow ninja and is now on death row. Tired of killing and betrayal, he wants to die. However, no method of execution works on him because as much as the seemingly apathetic Gabimaru refuses to admit it, he does have a reason to live. He wants to return to his wife, who was the reason why he softened up and failed to be an effective assassin. Thus, he refuses to die. Asaemon the Decapitator, a famous executioner, sees this and has a proposal for the ninja. He wants Gabimaru to join an expedition to an island south of Japan in search of the elixir of life in exchange for a full pardon by the Shogunate. However, this island isn't a normal island: it's believed to be Paradise.However the island is full of mysteries, and the exploring team—consisting of those marked for death—might not be fully prepared to handle them."
  },
]

export default function Home() {
  return (
    <Container>
      <Header />
      <Carousel slides={slides} />
    </Container>
  )
}