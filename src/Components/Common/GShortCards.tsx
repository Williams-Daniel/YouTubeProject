import styled from "styled-components";
import { BsThreeDotsVertical, BsCheck } from "react-icons/bs";

export interface iCard {
  IMage?: string;
  Vid?: string;
  title?: string;
  views?: string;
}
const GShortCard: React.FC<iCard> = ({ IMage, Vid, title, views }) => {
  return (
    <div>
      <Container>
        <Up>
          <Image src={IMage} />
          <Video src={Vid} autoPlay muted loop />
        </Up>
        <Down>
          <TitleHolder>
          <Title>{title}</Title>
          <Views>{views}</Views>
          </TitleHolder>
        <Dot />
        </Down>
      </Container>
    </div>
  );
};

export default GShortCard;
const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
  object-fit: cover;
  position: relative;
  bottom: 372px;
  opacity: 0;
`;

const Container = styled.div`
  width: 215px;
  height: 460px;
  /* background-color: lightgrey; */
  margin-top: 35px;
  border-radius: 10px 10px 10px 10px;
`;
const Up = styled.div`
  width: 100%;
  height: 80%;
  /* background-color: pink; */
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  :hover ${Video} {
    /* z-index: 10; */
    transition: all 500ms;
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
  object-fit: cover;
  /* z-index: 1; */
  position: relative;
`;
const Down = styled.div`
  width: 100%;
  height: 20%;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  /* align-items: center; */
`;
const Title = styled.div`
  font-weight: 500;
  margin-top: 8px;
`;
const Views = styled.div`
  font-size: 15px;
  color: grey;
  margin-top: 2px;
`;
const Dot = styled(BsThreeDotsVertical)`
  /* margin-top: 8px; */
  font-size: 40px;
  color: grey;
`;
const DotHolder = styled.div``
const TitleHolder = styled.div``