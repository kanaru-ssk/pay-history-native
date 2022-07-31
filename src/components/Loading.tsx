import { useEffect } from "react";

import { useAuth } from "hooks/auth";
import Svg, { Circle, G, Path } from "react-native-svg";

const Loading = () => {
  const { authUser } = useAuth();
  useEffect(() => {
    console.log(authUser?.uid);
  }, [authUser]);
  return (
    <Svg width="24" height="24" viewBox="0 0 40 40" stroke="#232C93">
      <G fill="none" transform="translate(2 2)" strokeWidth="4">
        <Circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <Path d="M36 18c0-9.94-8.06-18-18-18"></Path>
      </G>
    </Svg>
  );
};

export default Loading;
