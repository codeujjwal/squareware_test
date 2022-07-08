import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    id: 0,
    name: 'Event Name1',
    type: 'Dance & Arts',
    date: 10,
    month: 'may',
    time: '07:00 PM',
    image: require('../../../assets/images/4.png'),
  },
  {
    id: 1,
    name: 'Event Name2',
    type: 'Dance & Music',
    date: 11,
    month: 'may',
    time: '08:00 PM',
    image: require('../../../assets/images/2.png'),
  },
  {
    id: 2,
    name: 'Event Name',
    type: 'Music & Arts',
    date: 12,
    month: 'may',
    time: '09:00 PM',
    image: require('../../../assets/images/4.png'),
  },
];

const EventsForYou = () => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.heading}>Events For You</Text>
        <Text style={styles.seeall}>See all</Text>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.date_card}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.month}>{item.month}</Text>
            </View>
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
              style={styles.LinearGradient}>
              <Image style={styles.image} source={item.image} />
            </LinearGradient>
            <View style={styles.details}>
              <Text style={styles.headingname}>{item.name}</Text>
              <View style={styles.row}>
                <View style={styles.row}>
                  <Image source={require('../../../assets/icons/mic.png')} />
                  <Text style={styles.text}>{item.type}</Text>
                </View>
                <View style={styles.row}>
                  <Image source={require('../../../assets/icons/watch.png')} />
                  <Text style={styles.text}>{item.time}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {height: 150, width: 240, marginTop: 20, marginRight: 12},
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
  details: {
    position: 'absolute',
    zIndex: 100,
    paddingHorizontal: '5%',
    bottom: 20,
    width: '100%',
  },
  date_card: {
    backgroundColor: '#fff',
    width: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 100,
    paddingVertical: 5,
  },
});
export default EventsForYou;
