import { useEffect } from "react";
export function useClickOutside(
  container: React.RefObject<HTMLElement | null>,
  action: (b: boolean) => void,
) {
  useEffect(() => {
    if (container.current && container) return;

    function handleContainer(e) {
      if (container?.current?.contains(e.target)) {
        action(false);
      }
    }
    window.addEventListener("click", handleContainer);
    return () => {
      window.removeEventListener("click", handleContainer);
    };
  }, []);
}
