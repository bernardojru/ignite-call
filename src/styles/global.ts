import { globalCss } from "@ignite-ui/react";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },

  "::-webkit-scrollbar": {
    width: 6, 
    height: 6, 
  },

  "::-webkit-scrollbar-track": {
    background: "transparent",
  },

  "::-webkit-scrollbar-thumb": {
    background: "$ignite500",
    borderRadius: 10,
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },
});
