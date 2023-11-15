import { ChangeEventHandler } from "react";

export interface SearchbarProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  searchBarWidth: string;
}
