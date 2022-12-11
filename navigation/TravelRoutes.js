import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import GuideScreen from '../screens/GuideScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TripPlanScreen from '../screens/TripPlanScreen';
import GlobalImages from '../GlobalImages/GlobalImages';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TravelRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel : false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 65,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let uri = GlobalImages.homeIcon;
            if(focused){
                uri = GlobalImages.homeActiveIcon
            }
            return <Image  source={uri}  />
          },
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen}  options={{
          tabBarIcon: ({focused, color, size}) => {
            let uri = GlobalImages.searchIcon;
            if(focused){
                uri = GlobalImages.searchActiveIcon;
            }
            return <Image  source={uri}  />
          },
        }} />
      <Tab.Screen name="TripPlan" component={TripPlanScreen}  options={{
          tabBarIcon: ({focused, color, size}) => {
            let uri = GlobalImages.planIcon;
            if(focused){
                uri = GlobalImages.planActiveIcon
            }
            return <Image  source={uri}  />
          },
        }} />
      <Tab.Screen name="Guide" component={GuideScreen}  options={{
          tabBarIcon: ({focused, color, size}) => {
            let uri = GlobalImages.guideIcon;
            if(focused){
                uri = GlobalImages.guideActiveIcon
            }
            return <Image  source={uri}  />
          },
        }} />
    </Tab.Navigator>
  );
};

export default TravelRoutes;
