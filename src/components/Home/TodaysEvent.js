import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;
const data = [
  {
    id: 0,
    name: 'Event Name1',
    type: 'Dance & Arts',
    date: 10,
    month: 'may',
    time: '07:00 PM',
    image: require('../../../assets/images/3.png'),
  },
  {
    id: 1,
    name: 'Event Name2',
    type: 'Dance & Music',
    date: 11,
    month: 'may',
    time: '08:00 PM',
    image: require('../../../assets/images/4.png'),
  },
  {
    id: 2,
    name: 'Event Name',
    type: 'Music & Arts',
    date: 12,
    month: 'may',
    time: '09:00 PM',
    image: require('../../../assets/images/3.png'),
  },
];

const TodaysEvent = () => {
  return (
    <View>
      <Text style={styles.heading}>Today's Event</Text>
      <FlatList
        horizontal
        pagingEnabled={true}
        data={data}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.date_card}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.month}>{item.month}</Text>
            </View>
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
              style={styles.LinearGradient}>
              <Image style={styles.image} source={item.image} />
            </LinearGradient>
            <Text style={styles.headingname}>{item.name}</Text>
            <Text style={styles.ticketgo}>Go to ticket {'->'}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    height: 160,
    width: (width * 88) / 100,
    marginTop: 20,
    marginRight: 12,
    marginBottom: 24,
  },
  LinearGradient: {
    zIndex: 10,
  },
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  heading: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  headingname: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
    position: 'absolute',
    zIndex: 100,
    top: 20,
    left: 20,
  },
  ticketgo: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
    position: 'absolute',
    zIndex: 100,
    bottom: 5,
    right: 15,
  },
  seeall: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '800',
  },
  date: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
  },
  month: {
    color: '#A1A1A1',
    fontSize: 10,
    fontWeight: '700',
  },
  text: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    zIndex: -1,
  },
  date_card: {
    backgroundColor: '#fff',
    width: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 100,
    paddingVertical: 5,
  },
});
export default TodaysEvent;
