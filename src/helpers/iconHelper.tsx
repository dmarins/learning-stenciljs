const icons = [
  {
    name: "user",
    src: "../../assets/user.svg"
  },
  {
    name: "bag",
    src: "../../assets/bag.svg"
  },
  {
    name: "bars",
    src: "../../assets/bars.svg"
  },
  {
    name: "box",
    src: "../../assets/box.svg"
  },
  {
    name: "clock",
    src: "../../assets/clock.svg"
  },
  {
    name: "credit-card",
    src: "../../assets/credit-card.svg"
  },
  {
    name: "edit",
    src: "../../assets/edit.svg"
  },
  {
    name: "folder",
    src: "../../assets/folder.svg"
  },
  {
    name: "layout",
    src: "../../assets/layout.svg"
  },
  {
    name: "statements",
    src: "../../assets/statements.svg"
  },
  {
    name: "suitcase",
    src: "../../assets/suitcase.svg"
  },
  {
    name: "umbrella",
    src: "../../assets/umbrella.svg"
  }
];

const getIconPath = (name) => {
  const icon = icons.find((icon) => icon.name === name);
  if (!icon) return null;

  return icon.src;
};

export { getIconPath };
