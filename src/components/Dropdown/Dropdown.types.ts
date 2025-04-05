export interface DropdownProps {
  name: string;
  option1: string;
  option2?: string;
  option3?: string;

  value1: string;
  value2?: string;
  value3?: string;

  className?: string,
  id?: string,
  disabled?: boolean;
}