import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import EventsForYou from '../components/Home/EventsForYou';
import PopularEvents from '../components/Home/PopularEvents';
import TodaysEvent from '../components/Home/TodaysEvent';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.name_container}>
        <Text style={styles.heading}>Hi Bernd 👋</Text>
        <Image source={require('../../assets/icons/Notification.png')} />
      </View>
      <View style={styles.location_container}>
        <View>
          <Text style={styles.subHeading}>Tuesday, 3 May</Text>
          <Text style={styles.text}>Cologne, Germany</Text>
        </View>
        <View>
          <Image source={require('../../assets/icons/Rectangle.png')} />
          <Image
            style={styles.pin}
            source={require('../../assets/icons/Location.png')}
          />
        </View>
      </View>
      <TextInput
        style={styles.search}
        placeholder="Search event..."
        placeholderTextColor="#A2A2A2"
      />
      <TodaysEvent />
      <EventsForYou />
      <PopularEvents />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '7%',
  },
  heading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  subHeading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  text: {
    color: '#cccccc',
    fontSize: 14,
    fontWeight: '600',
  },
  name_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  location_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  pin: {position: 'absolute', alignSelf: 'center', top: '37%'},
  search: {
    backgroundColor: '#323232',
    marginTop: 30,
    height: 48,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 25,
  },
});
export default Home;
