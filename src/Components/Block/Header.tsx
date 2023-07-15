import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";
import { IoMdMic, IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import img1 from "../../Assets/Photos/cdnlogo.com_youtube.svg";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const OnToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <Container>
        <Main>
          <Left>
            <MenuWrapper onClick={OnToggle}>
              <MenuIcon />
              {
                show?(
                  <MenuContainer>
              </MenuContainer>
                ):null
              }
            </MenuWrapper>
            <Logo src={img1} />
            <div
              style={{
                fontSize: "10px",
                position: "absolute",
                top: "14px",
                left: "176px",
                color: "gray",
                fontWeight: "500",
              }}
            >
              NG
            </div>
          </Left>
          <Middle>
            <InputHolder>
              <Input placeholder="Search"/>
              <SearchButton>
                <SearchLogo />
              </SearchButton>
            </InputHolder>
            <Div><MicIcon /></Div>
          </Middle>
          <Right>
            <Div><VideoPlusLogo /></Div>
            <Div><NotificationLogo /></Div>
            <EmailInitials>d</EmailInitials>
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  background-color: white;
`;
const Main = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
`;
const Middle = styled.div`
  width: 640px;
  /* background-color: brown; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuIcon = styled(RxHamburgerMenu)`
  font-size: 22px;
`;
const Logo = styled.img`
  height: 90px;
  margin-left: 10px;
`;
const InputHolder = styled.div`
  width: 600px;
  height: 40px;
  /* background-color: black; */
  border-radius: 50px 50px 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  height: 92%;
  width: 89%;
  border-radius: 50px 0 0 50px;
  border: 1px solid silver;
  outline: none;
  padding-left: 20px;
  font-size: 17px;
  :focus{
    border: 1px solid #1C62B9;
  }
`;
const SearchLogo = styled(TfiSearch)`
  font-size: 20px;
`;
const SearchButton = styled.div`
  width: 70px;
  height: 97%;
  border: 1px solid silver;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 0 50px 50px 0;
  border-left: 0;
  cursor: pointer;
  :hover{
    background-color: #e2e2e2;
  }
`;
const MicIcon = styled(IoMdMic)`
  font-size: 22px;
  cursor: pointer;
  
`;
const Div =styled.div`
width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
  :hover{
    border-radius: 50px;
    background-color: #e2e2e2;
  }
`
const VideoPlusLogo = styled(BiVideoPlus)`
  font-size: 24px;
`;
const NotificationLogo = styled(IoMdNotificationsOutline)`
  font-size: 23px;
`;
const EmailInitials = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  background-color: #512da7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: bisque; */
  width: 130px;
`;
const MenuWrapper = styled.div`

`;
const MenuContainer = styled.div`
width: 250px;
min-height: 100vh;
background-color: purple;
position: fixed;
top: 0;
left: 0;
z-index: 1;

`;
const DropDownHeader = styled.div``;
const DropDownHeaderLogo = styled.div``;
const TopContainer = styled.div``;
const Holder = styled.div``;
const HIconn = styled.div``;
const Text = styled.div``;
