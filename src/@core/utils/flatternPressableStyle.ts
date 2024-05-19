import { PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle } from "react-native";

type OriginStyle = StyleProp<ViewStyle>;
type CallbackStyle = (state: PressableStateCallbackType) => OriginStyle;
type PressableStyle = OriginStyle | CallbackStyle;
type ParamStyle = Array<PressableStyle>;

export default function flatternPressableStyle(styles: ParamStyle) {
  return (state: PressableStateCallbackType) => {
    const rs: Array<ViewStyle> = [];

    styles.forEach(style => {
      if (typeof style === 'function') {
        rs.push(StyleSheet.flatten(style(state)));
      }
      else {
        rs.push(StyleSheet.flatten(style));
      }
    });

    return StyleSheet.flatten(rs);
  }
}