import { Text } from "./styles";

function TextArea({ label }) {
  return <Text label={label} multiline rows={4} fullWidth />;
}

export default TextArea;
