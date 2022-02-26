import SearchBar from "../components/UI/atoms/SearchBar";
import { Story } from "@storybook/api";

export default {
  title: "SearchBar",
  component: SearchBar,
  argTypes: {
    onChange: { action: "onChange" },
    onsubmit: { action: "onSubmit" },
  },
};

const Template = (args: any) => <SearchBar {...args} />;

export const Search = () => Template.bind({});

Search.args = {
  value: "",
  onChange: (e: any) => {},
  onSubmit: (e: any) => {},
};
