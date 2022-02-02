import { Dispatch, SetStateAction, useState } from "react";

export const useToggle = (initialValue: boolean): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [isToggle, setIsToggle] = useState(initialValue || false);

  const onToggle = () => setIsToggle(!isToggle);

  return [isToggle, onToggle, setIsToggle];
};
