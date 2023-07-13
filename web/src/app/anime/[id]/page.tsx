'use client'
import { useParams } from "next/navigation";
import { Container } from "./style";
import AnimeCastDescription from "@/components/AnimeCastDescription";

export default function Anime() {
  const params = useParams();
  const id = params.id;
  return (
    <Container>
      <div className="banner"></div>
      <AnimeCastDescription />
    </Container>
  )
}