import styled from "styled-components";
import { IButtons } from "../../Utils/Interface";

const GButtons: React.FC<IButtons> = ({
  hei,
  wid,
  brad,
  text,
  bg,
  fns,
  color,
}) => {
  return (
    <div>
      <Container
        hei={`${hei}`}
        wid={`${wid}`}
        brad={`${brad}`}
        bg={`${bg}`}
        fns={`${fns}`}
      >
        <Text color={`${color}`} fns={`${fns}`}>
          {text}
        </Text>
      </Container>
    </div>
  );
};

export default GButtons;

const Container = styled.div<{
  wid: string;
  hei: string;
  brad: string;
  bg: string;
  fns: string;
}>`
  width: ${({ wid }) => wid};
  height: ${({ hei }) => hei};
  background-color: ${({ bg }) => bg};
  border-radius: ${({ brad }) => brad};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 320ms;
  :hover{
    background-color: #e0e0e0;
  }
`;
const Text = styled.div<{ fns: string; color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ fns }) => fns};
`;
