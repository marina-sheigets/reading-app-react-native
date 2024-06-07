import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useTranslation } from 'react-i18next';

export default function TabLayout() {
  const {t} = useTranslation();

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
          headerTitle: t('In Progress'),
          tabBarLabel: t('Start to read'),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'timer' : 'timer-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: t('Books'),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: t('Community'),
          tabBarIcon: ({ color, focused}) => (
            <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        
        options={{          
          title: t('Profile'),
          tabBarIcon: ({ color, focused}) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
