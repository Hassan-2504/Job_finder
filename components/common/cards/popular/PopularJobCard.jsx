import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      {/* Logo Section */}
      <View style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={require("../../../../assets/images/3.png")} // Adjust the path based on the location
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
      </View>

      {/* Company Name */}
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      {/* Job Info Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
