export interface DropDownProps {
  id: number;
  logoUrl: string;
  label: string;
  items: string[];
}
export const dropDownItems: DropDownProps[] = [
  {
    id: 1,
    logoUrl: "/exploreLogo.svg",
    label: "Explore",
    items: ["One", "two", "three"],
  },
  {
    id: 2,
    logoUrl: "/hobbiesLogo.svg",
    label: "Hobbies",
    items: ["One", "two", "three"],
  },
];
