import { useEffect, useMemo } from "react";
import { Keyboard, KeyboardEvent } from "react-native";

export interface KeyboardListenHandlers {
  onShow?(event: KeyboardEvent): void;
  onShown?(event: KeyboardEvent): void;
  onhide?(event: KeyboardEvent): void;
  onHidden?(event: KeyboardEvent): void;
}

export default function useKeyboard(listeners: KeyboardListenHandlers) {

  const listen = useMemo(() => listeners, [listeners]);

  useEffect(() => {
    const show = Keyboard.addListener('keyboardWillShow', e => listen.onShow?.(e));
    const shown = Keyboard.addListener('keyboardDidShow', e => listen.onShown?.(e));
    const hide = Keyboard.addListener('keyboardWillHide', e => listen.onhide?.(e));
    const hidden = Keyboard.addListener('keyboardDidHide', e => listen.onHidden?.(e));

    return () => {
      show.remove();
      shown.remove();
      hide.remove();
      hidden.remove();
    }
  }, []);

}