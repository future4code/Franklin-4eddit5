import { Link } from "react-router-dom";
import { Container, Image, TextContainer, Text } from "./styles";

function Header({ LinkName, onClick }) {
  return (
    <Container>
      <Image src={"/images/logo-header.png"} height={30} width={30} />
      <TextContainer>
        <Text as={Link} to={"/"} onClick={onClick}>
          {LinkName}
        </Text>
      </TextContainer>
    </Container>
  );
}

export default Header;
