import { Tabs } from "expo-router";
import { Waypoints } from 'lucide-react-native';

export default function RootLayout() {
  return (
    
  <Tabs>
    <Tabs.Screen name="index"
    options={{
        title: "Receitas (Fetch)",
        tabBarLabel: 'Fetch',
        tabBarIcon: ()=>( <Waypoints />)
      }}
    />

  </Tabs> 

  )
}
