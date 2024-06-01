import { Tabs } from 'expo-router';
import React from 'react';

import { primary300 } from '@/constants/Colors';
import { Heart, Home, Map, Message, User } from '@/components/icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: primary300,
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, marginBottom: 5, fontFamily: 'InterRegular' },
        tabBarStyle: { height: 60, paddingTop: 5, shadowColor: 'transparent' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Home color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color }) => (
            <Map color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Heart color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Mensagens',
          tabBarIcon: ({ color }) => (
            <Message color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Conta',
          tabBarIcon: ({ color }) => (
            <User color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
