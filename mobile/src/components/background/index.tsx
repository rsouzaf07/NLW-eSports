import { ImageBackground } from "react-native";
import { styles } from "./styles";

import BackgroundImg from "../../assets/background-galaxy.png";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      style={styles.container}
      source={BackgroundImg}
      defaultSource={BackgroundImg}
    >
      {children}
    </ImageBackground>
  );
}
