import React from "react";
import { StyleSheet, Image, Text, View, ScrollView, TextInput, Button, FlatList } from "react-native";

const categories = [
  { id: '1', title: 'Exercise', tasks: '12 Tasks', image: require('./assets/exercise.jpeg') },
  { id: '2', title: 'Study', tasks: '12 Tasks', image: require('./assets/study.jpeg') },
  { id: '3', title: 'Cooking', tasks: '8 Tasks', image: require('./assets/cooking.jpeg') },
  { id: '4', title: 'Reading', tasks: '5 Tasks', image: require('./assets/reading.jpeg') },
  { id: '5', title: 'Travel', tasks: '3 Tasks', image: require('./assets/travel.jpeg') },
  { id: '6', title: 'Work', tasks: '10 Tasks', image: require('./assets/working.jpeg') },
  { id: '7', title: 'Shopping', tasks: '7 Tasks', image: require('./assets/shopping.jpeg') },
  { id: '8', title: 'Music', tasks: '6 Tasks', image: require('./assets/music.jpeg') },
];

const tasks = [
  { id: '1', title: 'Mobile App Development' },
  { id: '2', title: 'Web Development' },
  { id: '3', title: 'Push Ups' },
  { id: '4', title: 'Yoga' },
  { id: '5', title: 'Meditation' },
  { id: '6', title: 'Grocery Shopping' },
  { id: '7', title: 'House Cleaning' },
  { id: '8', title: 'Project Meeting' },
  { id: '9', title: 'Workout' },
  { id: '10', title: 'Code Review' },
  { id: '11', title: 'Client Call' },
  { id: '12', title: 'Laundry' },
  { id: '13', title: 'Read a Book' },
  { id: '14', title: 'Write Blog Post' },
  { id: '15', title: 'Plan Vacation' },
];

export default function Task() {
  return (
    <ScrollView style={styles.Task}>
      <View style={styles.Group921}>
        <View style={styles.Frame1}>
          <View style={styles.Group1}>
            <Text style={styles.HelloDevs}>Hello, Devs</Text>
            <Text style={styles._14TasksToday}>14 tasks today</Text>
          </View>
          <Image
            style={styles.ProfileImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/knvn0sszduq-1%3A13?alt=media&token=276c491b-ef29-4d38-962a-bda23411f547",
            }}
          />
        </View>
        <View style={styles.Search3}>
          <View style={styles.SearchBox}>
            <TextInput style={styles.TextInput} placeholder="Search" />
          </View>
          <Image
            style={styles.Filter}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/knvn0sszduq-1%3A31?alt=media&token=2b005946-b506-446c-82ed-757c1e7f6323",
            }}
          />
        </View>
        <Button title="Add Task" onPress={() => alert('Task added!')} />
        <Text style={styles.Categories}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.CategoriesCard}>
              <View style={styles.Group7}>
                <Text style={styles.CategoryTitle}>{item.title}</Text>
                <Text style={styles.CategoryTasks}>{item.tasks}</Text>
              </View>
              <Image
                style={styles.CategoryImage}
                source={item.image}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.OngoingTask}>Ongoing Tasks</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.OngoingTasksCards}>
              <Text style={styles.TaskTitle}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Task: {
    flex: 1,
    backgroundColor: "rgba(247,240,232,1)",
  },
  Group9: {
    flexDirection: "row",
    marginVertical: 20,
  },
  CategoriesCard: {
    flex: 1,
    padding: 16,
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
    marginRight: 10,
  },
  Group7: {
    paddingBottom: 2,
  },
  CategoryTitle: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontWeight: "700",
  },
  CategoryTasks: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
  },
  CategoryImage: {
    width: 151,
    height: 132,
  },
  Group921: {
    flex: 1,
    padding: 20,
  },
  Frame1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  Group1: {
    flex: 1,
  },
  HelloDevs: {
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    fontWeight: "700",
  },
  _14TasksToday: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  Search3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  SearchBox: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "rgba(232,209,186,1)",
    borderRadius: 14,
    backgroundColor: "rgba(251,249,247,1)",
  },
  TextInput: {
    height: 40,
    paddingHorizontal: 10,
  },
  Filter: {
    width: 50,
    height: 50,
  },
  Categories: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  OngoingTask: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  OngoingTasksCards: {
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(232,209,186,1)",
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
    marginBottom: 10,
  },
  TaskTitle: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontWeight: "700",
  },
});
