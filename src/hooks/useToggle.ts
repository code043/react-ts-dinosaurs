import { useCallback, useState } from "react";

function useToggle(initialState: boolean = false): [boolean, () => void] {
  const [isToggle, setIsToggle] = useState<boolean>(initialState);
  const toggle = useCallback(() => {
    setIsToggle(!isToggle);
  }, [isToggle]);
  return [isToggle, toggle];
}
export default useToggle;
