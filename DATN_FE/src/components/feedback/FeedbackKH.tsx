import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

interface Feedback {
  cusId: string;
  prodId: string;
  stars: number;
  content: string;
  dateFeed: string;
}

const FeedbackKH: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    // Fetch feedback data from MongoDB via API
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:28017/feedbacks');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  const renderFeedback = ({ item }: { item: Feedback }) => (
    <View style={styles.feedbackItem}>
      <Text style={styles.feedbackContent}>Khách hàng: {item.cusId}</Text>
      <Text style={styles.feedbackContent}>Sản phẩm: {item.prodId}</Text>
      <Text style={styles.feedbackContent}>Số sao: {item.stars}</Text>
      <Text style={styles.feedbackContent}>Nội dung: {item.content}</Text>
      <Text style={styles.feedbackDate}>Ngày: {item.dateFeed}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phản hồi từ khách hàng</Text>
      <FlatList
        data={feedbacks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderFeedback}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  feedbackItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  feedbackContent: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  feedbackDate: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
});

export { FeedbackKH };
