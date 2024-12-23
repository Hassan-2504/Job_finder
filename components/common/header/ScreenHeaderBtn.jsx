import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "@/components/common/header/screenheader.style"; // Ensure the path is correct

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      {" "}
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)} // Call the function correctly
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
