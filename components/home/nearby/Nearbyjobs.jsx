import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard"; // Adjust path if necessary
import { dummyData } from "../../../dummydata"; // Adjust path if necessary
import styles from "./nearbyjobs.style"; // Ensure this file contains the necessary styles
import { COLORS } from "../../../constants"; // Ensure this file contains your color constants

const NearbyJobs = () => {
  const router = useRouter();

  const handleNavigate = (jobId) => {
    router.push(`/job-details/${jobId}`); // Navigate to JobDetails
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity onPress={() => router.push("/all-jobs")}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() => handleNavigate(item.job_id)}
          />
        )}
        keyExtractor={(item) => item.job_id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          <ActivityIndicator size="large" color={COLORS.primary} />
        }
      />
    </View>
  );
};

export default NearbyJobs;
