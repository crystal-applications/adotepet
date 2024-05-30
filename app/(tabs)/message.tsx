import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MessageScreen() {
  return (
    <SafeAreaView>
      <ThemedText type="h1">Message Screen</ThemedText>
    </SafeAreaView>
  );
}
