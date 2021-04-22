import {
  Component,
  Host,
  Element,
  Prop,
  Listen,
  Watch,
  Event,
  EventEmitter,
  h
} from "@stencil/core";
import { getIconPath } from "../../helpers/iconHelper";

@Component({
  tag: "pismo-nav",
  styleUrl: "pismo-nav.css",
  shadow: true
})
export class PismoNav {
  @Element() el: HTMLElement;

  @Prop({ mutable: true }) url = "";
  @Prop({ mutable: true }) label = "";
  @Prop({ mutable: true }) ariaExpanded = false;
  @Prop({ mutable: true, reflect: true }) depth = 0;
  @Prop({ mutable: true }) hasChildren = false;
  @Prop({ mutable: true, reflect: true }) parentExpanded = false;
  @Prop({ mutable: true }) iconName = "";

  @Event() menuItemToggled: EventEmitter;

  @Watch("ariaExpanded")
  expandedHandler(newValue: boolean) {
    const children = Array.prototype.slice.call(this.el.children);

    children.forEach((child) => (child.parentExpanded = newValue));
    this.menuItemToggled.emit({ expanded: this.ariaExpanded });
  }

  @Listen("handleClick")
  handleClick(e) {
    if (this.hasChildren === false) return;

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
      if (nextParentMenu === parentMenu) break;

      parentMenu = nextParentMenu;
      this.depth++;
    }
  }

  render() {
    const renderIcon =
      this.depth === 1 ? (
        <span class="icon">
          {this.iconName && (
            <img
              src={getIconPath(this.iconName)}
              alt="an icon to illustrate the menu"
            />
          )}
        </span>
      ) : null;
    const tabIndex = this.parentExpanded || this.depth === 1 ? 0 : -1;
    const leftIndent = this.depth >= 2 ? `20%` : null;
    const ariaExpanded = this.hasChildren
      ? this.ariaExpanded.toString()
      : this.ariaExpanded;
    const renderChildren = this.hasChildren && (
      <div class="nav-children" role="menu" aria-label={this.label}>
        <slot></slot>
      </div>
    );

    return (
      <Host role="none">
        <div class="nav-item" aria-expanded={ariaExpanded}>
          {renderIcon}
          <a
            class="link"
            role="menu-item"
            href={this.url ? this.url : null}
            tabIndex={tabIndex}
            aria-haspopup={this.hasChildren.toString()}
            onClick={(e) => this.handleClick(e)}
            style={{ marginLeft: leftIndent }}
          >
            {this.label}
          </a>
        </div>
        {renderChildren}
      </Host>
    );
  }
}
