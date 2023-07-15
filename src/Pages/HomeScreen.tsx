import styled from "styled-components";
import GButtons from "../Components/Common/GlobalButton";
import GCard from "../Components/Common/GlobalCard";
import img1 from "../Assets/Photos/Photography.jpg";
import img2 from "../Assets/Photos/ronlach.jpg";
import img3 from "../Assets/Photos/Chandler.jpg";
import img4 from "../Assets/Photos/Church.jpg";
import img5 from "../Assets/Photos/Asianpotrait.jpg";
import img6 from "../Assets/Photos/Glasses.jpg";
import img7 from "../Assets/Photos/ICreate.png";
import img8 from "../Assets/Photos/KenLogo.jpg";
import img9 from "../Assets/Photos/WilliamsPhoto.jpg";
import img10 from "../Assets/Photos/Workstation.jpg";
import img11 from "../Assets/Photos/office.jpg";
import img12 from "../Assets/Photos/tatsman.jpg";
import img13 from "../Assets/Photos/smileyportrait.jpg";
import img14 from "../Assets/Photos/Space.jpg";
import vid1 from "../Assets/Videos/cottonMoon.mp4";
import vid2 from "../Assets/Videos/churchSingers.mp4";
import vid3 from "../Assets/Videos/Shoe.mp4";
import vid4 from "../Assets/Videos/Family.mp4";
import vid5 from "../Assets/Videos/Forex.mp4";
import vid6 from "../Assets/Videos/Bikemen.mp4";
import vid7 from "../Assets/Videos/guitarist.mp4";
import GShortCard from "../Components/Common/GShortCards";
import {GiAirZigzag} from "react-icons/gi"
import {TfiClose} from "react-icons/tfi"
import {RiArrowDownSLine} from "react-icons/ri"




const HomeScreen = () => {
  return (
    <div style={{ display: "flex", justifyContent: "end", alignItems: "" }}>
      <Container>
        <Comp1>
          <GButtons
            hei="33px"
            wid="40px"
            brad="8px"
            fns="14px"
            text="All"
            bg="black"
            color="white"
          />
          <GButtons
            hei="32px"
            wid="60px"
            brad="8px"
            fns="14px"
            text="Music"
            bg="#F2F2F2"
            color="black"
          />
          <GButtons
            hei="32px"
            wid="55px"
            brad="8px"
            fns="14px"
            text="Mixes"
            bg="#F2F2F2"
            color="black"
          />
          <GButtons
            hei="32px"
            wid="220px"
            brad="8px"
            fns="14px"
            text="Contemporary Worship Music"
            bg="#F2F2F2"
            color="black"
          />
          <GButtons
            hei="32px"
            wid="80px"
            brad="8px"
            fns="14px"
            text="Auditions"
            bg="#F2F2F2"
            color="black"
          />
          <GButtons
            hei="32px"
            wid="100px"
            brad="8px"
            fns="14px"
            text="Game Shows"
            bg="#F2F2F2"
            color="black"
          />
          <GButtons
            hei="32px"
            wid="120px"
            brad="8px"
            fns="14px"
            text="Sketch Comedy"
            bg="#F2F2F2"
            color="Black"
          />
          <GButtons
            hei="32px"
            wid="120px"
            brad="8px"
            fns="14px"
            text="Freestyle Rap"
            bg="#F2F2F2"
            color="black"
          />
          <GButtons
            hei="32px"
            wid="50px"
            brad="8px"
            fns="14px"
            text="Live"
            bg="#F2F2F2"
            color="Black"
          />
          <GButtons
            hei="32px"
            wid="80px"
            brad="8px"
            fns="14px"
            text="Thoughts"
            bg="#F2F2F2"
            color="Black"
          />
          <GButtons
            hei="32px"
            wid="60px"
            brad="8px"
            fns="14px"
            text="Rythms"
            bg="#F2F2F2"
            color="black"
          />
        </Comp1>
        <CompWrapper>
          <Comp2>
            <GCard
              IMage={img1}
              IMage2={img2}
              Vid={vid1}
              title="Photos Unpacks The Racist Response to The Little Mermaid | The..."
              name="The Daily Show"
              views="1.7M views
          1 month ago"
            />
            <GCard
              IMage={img3}
              IMage2={img6}
              Vid={vid7}
              title="Music trainning just for.."
              name="SoulMUZIK"
              views="1.7M views
          1 month ago"
            />
            <GCard
              IMage={img4}
              IMage2={img11}
              Vid={vid2}
              title="Join us as we worship ..."
              name="Christ Dwelling place."
              views="78M views
            1 month ago"
            />
            <GCard
              IMage={img7}
              IMage2={img12}
              Vid={vid3}
              title="ICreate africa ft Footwear Guru Ken Williams..."
              name="ICreate Afarica"
              views="24.7M views
            1 month ago"
            />
            <GCard
              IMage={img10}
              IMage2={img5}
              Vid={vid5}
              title="Photos Unpacks The Racist Response to The Little Mermaid | The..."
              name="Business logic"
              views="10.7M views
            1 month ago"
            />
            <GCard
              IMage={img8}
              IMage2={img8}
              Vid={vid3}
              title="The Ken Wiilliams Industry..."
              name="KenWilliams🦾"
              views="2.5M views
            1 month ago"
            />
          </Comp2>
          <Comp3>
            <Comp3Top>
              <TopLeft>
                <ShortsIcon/>
                <TopLeftText> Shorts</TopLeftText>
              </TopLeft>
              <CancelIcon />
            </Comp3Top>
           <Comp3Bottom>
           <GShortCard
              IMage={img3}
              title="When music hits differently
              you can't hide your ..."
              views="120k Views"
              Vid={vid2}
            />
            <GShortCard
              IMage={img6}
              title="The University of Oakland offers ..."
              views="21k Views"
              Vid={vid4}
            />
            <GShortCard
              IMage={img14}
              title="Clear your mind with our soothing..."
              views="12k Views"
              Vid={vid6}
            />
            <GShortCard
              IMage={img13}
              title="Smile Wide ..."
              views="310k Views"
              Vid={vid2}
            />
            <GShortCard
              IMage={img9}
              title="Unity in diversity depicts..."
              views="212k Views"
              Vid={vid5}
            />
           </Comp3Bottom>
           <DownIcon><DIcon/></DownIcon>
          </Comp3>
        </CompWrapper>
      </Container>
    </div>
  );
};

export default HomeScreen;

const Container = styled.div`
  min-height: 100vh;
  width: calc(100% - 85px);
  /* background-color: darkorange; */
  /* position: fixed; */
  /* z-index: 1; */
  margin-top: 50px;
`;
const Comp1 = styled.div`
  width: 97.5%;
  height: 65px;
  position: fixed;
  z-index: 1;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Comp2 = styled.div`
  width: 97%;
  height: 100%;
  /* background-color: darkblue; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const CompWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  flex-wrap: wrap;
  /* background-color: red; */
`;
const Comp3 = styled.div`
  height: 660px;
  width: 97%;
  /* background-color: aliceblue; */
  border-top: 4px solid #e5e5e5;
  border-bottom: 4px solid #e5e5e5;
  margin-top: 20px;
`;
const Comp3Top = styled.div`
width: 100%;
height: 90px;
/* background-color: blueviolet; */
display: flex;
justify-content: space-between;
align-items: center;
`;
const TopLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const CancelIcon = styled(TfiClose)`
font-size: 20px;
`;
const ShortsIcon = styled(GiAirZigzag)`
font-size: 30px;
color: #FF0000;
`;
const TopLeftText = styled.div`
margin-left: 5px;
font-size: 25px;
`;
const Comp3Bottom = styled.div`
width: 100%;
height: 510px;
/* background-color: peachpuff; */
display: flex;
justify-content: space-between;
`
const DownIcon = styled.div`
width: 100%;
height: 40px;
/* background-color: black; */
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-top: 20px;
transition: all 35ms;
:hover{
background-color: #dbdbdb;
/* border-top: 4px solid #e5e5e5; */
}
`
const DIcon = styled(RiArrowDownSLine)``
// const Comp3 = styled.div``
