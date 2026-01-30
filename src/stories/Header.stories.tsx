
import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
};

export const LoggedIn = {
  args: {
    user: { name: "Jane Doe" },
  },
};

export const LoggedOut = {
  args: {
    user: null,
  },
};
