import { Link } from "react-router-dom";
import { Container, Image, TextContainer, Text } from "./styles";

function Header({ LinkName }) {
  function handleClick() {
    localStorage.removeItem("labeddit");
  }

  return (
    <Container>
      <Image src={"/images/logo-header.png"} height={30} width={30} />
      <TextContainer>
        <Text as={Link} to={"/"} onClick={handleClick}>
          {LinkName}
        </Text>
      </TextContainer>
    </Container>
  );
}

export default Header;
