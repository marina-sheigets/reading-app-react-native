import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerPressColor:"#d2e1c8",
        tabBarActiveTintColor:"grey",
        tabBarItemStyle:{
          paddingBottom:10
        },
        tabBarStyle:{
          paddingTop:5,
          height: 55
        }
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'In Progress',
          tabBarLabel: 'Start to read',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'timer' : 'timer-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: 'Books',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color, focused}) => (
            <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        
        options={{          
          title: 'Profile',
          tabBarIcon: ({ color, focused}) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
