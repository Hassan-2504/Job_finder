import React, { useState } from "react"; // Import useState from React
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./popularjobs.style";
import { SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const PopularJobs = () => {
  const data = [
    {
      id: 1,
      employer_name: "Siemens",
      employer_logo: "../../../assets/images/1.png",
      job_title: "UI ReactJs Developer",
      job_country: "Bangalore, India",
    },
    {
      id: 2,
      employer_name: "Fueled",
      employer_logo: "../../../assets/images/2.png",
      job_title: "Lead Engineer, ReactJS",
      job_country: "Remote/United States",
    },
    {
      id: 3,
      employer_name: "IQVIA",
      employer_logo: "../../../assets/images/3.png",
      job_title: "Senior ReactJS Developer",
      job_country: "Dhaka, Bangladesh",
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null); // Initialize the state for selected job

  const handleCardPress = (item) => {
    console.log(item); // Placeholder for actual navigation logic
    setSelectedJob(item.id); // Set the selected job's ID
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={data} // Pass the `data` array directly
          renderItem={({ item }) => (
            <PopularJobCard
              item={item} // Ensure the item is passed to the PopularJobCard
              selectedJob={selectedJob} // Pass selected job ID
              handleCardPress={handleCardPress} // Pass the function to handle card press
            />
          )}
          keyExtractor={(item) => item.id.toString()} // Use item ID as key
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
};

export default PopularJobs;
