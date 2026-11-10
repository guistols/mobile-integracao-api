import { Tabs } from "expo-router";
import { Waypoints } from 'lucide-react-native';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        <Tabs.Screen name="index"
          options={{
            title: "Receitas (Fetch)",
            tabBarLabel: 'Fetch',
            tabBarIcon: () => (<Waypoints />)
          }}
        />
        <Tabs.Screen name="axios"
          options={{
            title: "Receitas (Axios)",
            tabBarLabel: 'Axios',
            tabBarIcon: () => (<Waypoints />)
          }}
        />
      </Tabs>
    </QueryClientProvider>
  )
}
