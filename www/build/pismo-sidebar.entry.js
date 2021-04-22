import { r as registerInstance, h, f as Host } from './index-21558066.js';

const pismoSidebarCss = "@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'); #container{box-sizing:border-box;height:100vh;width:240px;display:flex;flex-direction:column;align-items:flex-start;font-family:'Lato', sans-serif}#container .header{width:100%;height:60px;display:flex;align-items:center;background-color:#000;color:#838192;font-weight:700;font-size:1rem}#container .header .icon{width:20%;margin-left:20px;background:url(\"../../assets/bars.svg\") no-repeat left center;height:24px}#container .header .app-name{width:80%}#container .menu{width:100%;height:calc(100vh - 120px);background-color:#1a1a22;overflow:auto}#container .menu::-webkit-scrollbar-track{background-color:#1a1a22}#container .menu::-webkit-scrollbar{width:6px}#container .menu::-webkit-scrollbar-thumb{background:#525061}#container .footer{width:100%;height:60px;display:flex;align-items:center;background-color:#1a1a22;border-top:1px solid #525061;font-weight:400;font-size:0.875rem}#container .footer .version{color:#838192;margin-left:20px}";

const PismoSidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.appName = "AppName";
    this.version = "X.X.X";
  }
  render() {
    return (h(Host, { role: "none-test" }, h("div", { id: "container" }, h("div", { class: "header" }, h("span", { class: "icon" }), h("span", { class: "app-name" }, this.appName)), h("div", { class: "menu" }, h("slot", null)), h("div", { class: "footer" }, h("span", { class: "version" }, `v${this.version}`)))));
  }
};
PismoSidebar.style = pismoSidebarCss;

export { PismoSidebar as pismo_sidebar };
