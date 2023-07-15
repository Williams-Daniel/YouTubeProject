import styled from "styled-components"
import {MdHomeFilled,MdAppShortcut,MdOutlineSubscriptions,MdOutlineVideoLibrary} from "react-icons/md"



const Sider = ()=>{
    return(
        <div>
            <Wrapper>
            <Container>
                <Main>
                <Icon1/>
                <Text1>Home</Text1>
                <Icon2/>
                <Text2>Shorts</Text2>
                <Icon3/>
                <Text3>Subscriptions</Text3>
                <Icon4/>
                <Text4>Library</Text4>
                </Main>
            </Container>
            </Wrapper>
        </div>
    )
}

export default Sider

const Container = styled.div`
height: calc(100% - 50px);
width: 85px;
/* background-color: purple; */
/* z-index: 1; */
position: fixed;
margin-top: 50px;

/* justify-content: center; */
`
const Icon1 = styled(MdHomeFilled)`
font-size: 25px;
`
const Text1 = styled.div`
font-size: 12px;
margin-top: 5px;
margin-bottom: 20px;

`
const Icon2 = styled(MdAppShortcut)`
font-size: 25px;
`
const Text2 = styled.div`
font-size: 12px;
margin-top: 5px;
margin-bottom: 20px;
`
const Icon3 = styled(MdOutlineSubscriptions)`
font-size: 25px;
`
const Text3 = styled.div`
font-size: 12px;
margin-top: 5px;
margin-bottom: 20px;
`
const Icon4 = styled(MdOutlineVideoLibrary)`
font-size: 25px;
`
const Text4 = styled.div`
font-size: 12px;
margin-top: 5px;
margin-bottom: 20px;
`
const Main = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top:23px;
`

const Wrapper = styled.div`
height: 100%;
width: 120px;
display: flex;
/* align-items: end; */
`