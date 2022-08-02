import { Text } from "./styles";

function TextArea(props) {
  return <Text {...props} multiline rows={4} fullWidth />;
}

export default TextArea;
