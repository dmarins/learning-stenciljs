import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-21558066.js';

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
  if (!icon)
    return null;
  return icon.src;
};

const pismoNavCss = ".nav-item{display:flex;align-items:center;height:60px;padding-left:20px}.nav-item:hover{background-color:#000}.nav-item:focus-within{border:2px solid #1897f3}.nav-item .icon{width:20%;color:#ebeaf0;font-weight:700;font-size:1rem}.nav-item .link{outline:none;width:80%;color:#ebeaf0;text-decoration:none;font-weight:700;font-size:1rem;margin-right:5px}.nav-item:focus-within .link,.nav-item:focus-within .icon{color:#64bcfc}.nav-item:focus-within .link::after{float:right;width:10px;height:10px;border-radius:50%;background-color:#64bcfc;content:\"\";margin-left:8px;margin-right:25px;margin-top:3px}.link[aria-haspopup=\"false\"]{font-weight:400;font-size:0.875rem}.nav-children{opacity:0;overflow:hidden;max-height:0;transition:all 0.2s ease-in-out}.nav-item[aria-expanded=\"true\"]~.nav-children{opacity:1;max-height:1000px;height:auto}";

const PismoNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuItemToggled = createEvent(this, "menuItemToggled", 7);
    this.url = "";
    this.label = "";
    this.ariaExpanded = false;
    this.depth = 0;
    this.hasChildren = false;
    this.parentExpanded = false;
    this.iconName = "";
  }
  expandedHandler(newValue) {
    const children = Array.prototype.slice.call(this.el.children);
    children.forEach((child) => (child.parentExpanded = newValue));
    this.menuItemToggled.emit({ expanded: this.ariaExpanded });
  }
  handleClick(e) {
    if (this.hasChildren === false)
      return;
    e.preventDefault();
    this.ariaExpanded = !this.ariaExpanded;
  }
  componentWillRender() {
    this.depth = 0;
    this.hasChildren = !!this.el.hasChildNodes();
    let parentMenu = this.el.closest("pismo-nav");
    let nextParentMenu;
    while (parentMenu) {
      nextParentMenu = parentMenu.parentElement.closest("pismo-nav");
      if (nextParentMenu === parentMenu)
        break;
      parentMenu = nextParentMenu;
      this.depth++;
    }
  }
  render() {
    const renderIcon = this.depth === 1 ? (h("span", { class: "icon" }, this.iconName && (h("img", { src: getIconPath(this.iconName), alt: "an icon to illustrate the menu" })))) : null;
    const tabIndex = this.parentExpanded || this.depth === 1 ? 0 : -1;
    const leftIndent = this.depth >= 2 ? `20%` : null;
    const ariaExpanded = this.hasChildren
      ? this.ariaExpanded.toString()
      : this.ariaExpanded;
    const renderChildren = this.hasChildren && (h("div", { class: "nav-children", role: "menu", "aria-label": this.label }, h("slot", null)));
    return (h(Host, { role: "none" }, h("div", { class: "nav-item", "aria-expanded": ariaExpanded }, renderIcon, h("a", { class: "link", role: "menu-item", href: this.url ? this.url : null, tabIndex: tabIndex, "aria-haspopup": this.hasChildren.toString(), onClick: (e) => this.handleClick(e), style: { marginLeft: leftIndent } }, this.label)), renderChildren));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "ariaExpanded": ["expandedHandler"]
  }; }
};
PismoNav.style = pismoNavCss;

export { PismoNav as pismo_nav };
