import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    id: 0,
    name: 'Event Name1',
    type: 'Dance & Arts',
    date: 10,
    month: 'may',
    time: '07:00 PM',
    image: require('../../../assets/images/1.png'),
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
    image: require('../../../assets/images/1.png'),
  },
];

const PopularEvents = () => {
  return (
    <View style={styles.margin}>
      <View style={styles.row}>
        <Text style={styles.heading}>Popular Events</Text>
        <Text style={styles.seeall}>See all</Text>
      </View>
      {data.map(i => (
        <View style={styles.card} key={i.id}>
          <View style={styles.date_card}>
            <Text style={styles.date}>{i.date}</Text>
            <Text style={styles.month}>{i.month}</Text>
          </View>
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
            style={styles.LinearGradient}>
            <Image style={styles.image} source={i.image} />
          </LinearGradient>
          <View style={styles.details}>
            <Text style={styles.headingname}>{i.name}</Text>
            <View style={styles.row}>
              <View style={styles.row}>
                <Image source={require('../../../assets/icons/mic.png')} />
                <Text style={styles.text}>{i.type}</Text>
              </View>
              <View style={styles.row}>
                <Image source={require('../../../assets/icons/watch.png')} />
                <Text style={styles.text}>{i.time}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  LinearGradient: {
    marginTop: 20,
    zIndex: 10,
  },
  margin: {marginBottom: 50},
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  heading: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  headingname: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
  },
  seeall: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '800',
  },
  date: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  month: {
    color: '#A1A1A1',
    fontSize: 14,
    fontWeight: '700',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 10,
  },
  image: {
    height: 280,
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
    width: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 35,
    right: 15,
    zIndex: 100,
    paddingVertical: 5,
  },
});
export default PopularEvents;
