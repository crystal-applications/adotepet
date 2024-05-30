import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

type StyleTypesHeader = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type StyleTypesBody = 'medium' | 'large' | 'small' | 'xsmall';
type FontFamily = 'sb' | 'm' | 'r';
type FontStyle = StyleTypesHeader & StyleTypesBody;

type StylesTypes = `${StyleTypesHeader}` | StyleTypesBody | `${StyleTypesBody}-${FontFamily}`;

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: StylesTypes;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'medium',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const [styleFont, fontFamily = 'r'] = type.split('-') as [FontStyle, FontFamily];

  const isHeader = /^h\d/.test(type);

  return (
    <Text
      style={[
        { color },
        styles[styleFont],
        styles[isHeader ? 'sb' : fontFamily],
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  sb: {
    fontFamily: 'InterSemiBold',
  },
  m: {
    fontFamily: 'InterMedium',
  },
  r: {
    fontFamily: 'InterRegular',
  },
  h1: {
    fontSize: 48,
  },
  h2: {
    fontSize: 40,
  },
  h3: {
    fontSize: 32,
  },
  h4: {
    fontSize: 24,
  },
  h5: {
    fontSize: 20,
  },
  h6: {
    fontSize: 18,
  },
  large: {
    fontSize: 18,
  },
  medium: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
  xsmall: {
    fontSize: 12,
  }
});
