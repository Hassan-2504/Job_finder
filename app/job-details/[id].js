import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import {
  Company,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import { dummyData } from "../../dummydata";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const router = useRouter();

  // Safety check for router.params
  const jobId = router.params?.id ? Number(router.params.id) : null;

  console.log("Router Params:", router.params);
  console.log("Job ID:", jobId);

  // Find job data; if not found, set jobData to null
  const jobData = jobId ? dummyData.find((job) => job.job_id === jobId) : null;

  console.log("Job Data Found:", jobData);

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Refresh logic if needed
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {!jobData ? (
          <Text style={{ padding: SIZES.medium }}>No data available</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={jobData.employer_logo}
              jobTitle={jobData.job_title}
              companyName={jobData.employer_name}
              location={jobData.job_country}
            />
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Specifics
              title="About"
              points={jobData.job_highlights?.Qualifications ?? ["N/A"]}
            />
          </View>
        )}
      </ScrollView>

      {jobData && (
        <JobFooter
          url={
            jobData.job_google_link ??
            "https://careers.google.com/jobs/results/"
          }
        />
      )}
    </SafeAreaView>
  );
};

export default JobDetails;
