import { EventEmitter } from "../../stencil-public-runtime";
export declare class PismoNav {
  el: HTMLElement;
  url: string;
  label: string;
  ariaExpanded: boolean;
  depth: number;
  hasChildren: boolean;
  parentExpanded: boolean;
  iconName: string;
  menuItemToggled: EventEmitter;
  expandedHandler(newValue: boolean): void;
  handleClick(e: any): void;
  componentWillRender(): void;
  render(): any;
}
