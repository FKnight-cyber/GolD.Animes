import Image from "next/image"
import styled from "styled-components"
import { FaHeart } from "react-icons/fa";

export default function AnimeCastDescription() {
  return (
    <Container>
      <div className="topInfo">
        <Image src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg' 
          width={100} 
          height={150}
          alt=""
          className="image"
        />
        <button>Add to List</button>
        <div className="icon">
          <FaHeart size={16} color="fff" />
        </div>
      </div>
      <div className="description"></div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 36%;
  background-color: #2a2c31;

  .topInfo {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: crimson;
      width: 35px;
      height: 35px;
      border-radius: 4px;
    }

    button {
      width: 165px;
      height: 35px;
      background-color: crimson;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-weight: bolder;
    }

    .image {
      transform: translateY(-116px);
    }
  }
`