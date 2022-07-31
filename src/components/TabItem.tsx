import { View, Button } from "react-native";
import { useTailwind } from "tailwind-rn";

type Props = {
  text: string;
  href: string;
  isActive: boolean;
};

const TabItem = ({ text, href, isActive }: Props) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("mx-2 ")}>
      <Button title={text} />
    </View>
  );
};

export default TabItem;
