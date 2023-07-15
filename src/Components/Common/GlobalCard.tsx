import styled from "styled-components";
import { BsThreeDotsVertical,BsCheck } from "react-icons/bs";



export interface iCard{
IMage?:string,
Vid?:string,
IMage2?:string,
title?:string,
name?:string,
views?:string
}
const GCard:React.FC<iCard> = ({
  IMage,
  Vid,
  IMage2,
  name,
  title,
  views
}) => {
  return (
    <div>
      <Container>
        <Up>
          <Image src={IMage} />
          <Video src={Vid} autoPlay muted loop />
        </Up>
        <Down>
          <ImageHolder>
            <SmallImg src={IMage2} />
          </ImageHolder>
          <TextHolder>
            <Title>
              {title}
            </Title>
            <Name>
              {name}
              <div
                style={{
                  height: "13px",
                  width: "13px",
                  borderRadius: "30px",
                  backgroundColor: "grey",
                  marginLeft: "3px",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
              ><Icon/></div>
            </Name>
            <Views>{views}</Views>
          </TextHolder>
          <Dot />
        </Down>
      </Container>
    </div>
  );
};

export default GCard;
const Video = styled.video`
width: 100%;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
  object-fit: cover;
  position: relative;
  bottom:220px ;
  opacity: 0;
`;

const Container = styled.div`
  width: 377px;
  height: 360px;
  /* background-color: lightgrey; */
  margin-top: 35px;
`;
const Up = styled.div`
  width: 100%;
  height: 60%;
  /* background-color: pink; */
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  :hover ${Video}{
/* z-index: 10; */
transition: all 800ms;
opacity: 1;
border-radius: 0 0 0 0 ;

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
  height: 40%;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

`;
const ImageHolder = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: blue;
  margin-top: 8px;
`;
const SmallImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  object-fit: cover;
  height: 100%;
`;
const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: burlywood; */
  width: 290px;
  margin-top: 8px;
`;
const Title = styled.div`
  font-weight: 500;
  margin-top: 8px;
`;
const Name = styled.div`
  font-size: 15px;
  color: grey;
  margin-top: 7px;
  display: flex;
  /* background-color: orange; */
  align-items: center;
`;
const Views = styled.div`
  font-size: 15px;
  color: grey;
  margin-top: 2px;
`;
const Dot = styled(BsThreeDotsVertical)`
  margin-top: 8px;
  font-size: 18px;
`;
const Icon= styled(BsCheck)`
/* font-size: 20px; */
color: white;
`