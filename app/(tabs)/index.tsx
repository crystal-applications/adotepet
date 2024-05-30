import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ThemedText type="h1">Header 1</ThemedText>
      <ThemedText type="h2">Header 2</ThemedText>
      <ThemedText type="h3">Header 3</ThemedText>
      <ThemedText type="h4">Header 4</ThemedText>
      <ThemedText type="h5">Header 5</ThemedText>
      <ThemedText type="h6">Header 6</ThemedText>

      <ThemedText type="large-sb">Body Large SemiBold</ThemedText>
      <ThemedText type="large-m">Body Large Medium</ThemedText>
      <ThemedText type="large-r">Body Large Regular</ThemedText>

      <ThemedText type="medium-sb">Body Medium SemiBold</ThemedText>
      <ThemedText type="medium-m">Body Medium Medium</ThemedText>
      <ThemedText type="medium-r">Body Medium Regular</ThemedText>

      <ThemedText type="small-sb">Body Small SemiBold</ThemedText>
      <ThemedText type="small-m">Body Small Medium</ThemedText>
      <ThemedText type="small-r">Body Small Regular</ThemedText>

      <ThemedText type="xsmall-sb">Body XSmall SemiBold</ThemedText>
      <ThemedText type="xsmall-m">Body XSmall Medium</ThemedText>
      <ThemedText type="xsmall-r">Body XSmall Regular</ThemedText>
    </SafeAreaView>
  );
}
