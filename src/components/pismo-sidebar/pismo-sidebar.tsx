import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "pismo-sidebar",
  styleUrl: "pismo-sidebar.css",
  shadow: true
})
export class PismoSidebar {
  @Prop({ mutable: true }) appName = "AppName";
  @Prop({ mutable: true }) version = "X.X.X";

  render() {
    return (
      <Host role="none-test">
        <div id="container">
          <div class="header">
            <span class="icon"></span>
            <span class="app-name">{this.appName}</span>
          </div>
          <div class="menu">
            <slot></slot>
          </div>
          <div class="footer">
            <span class="version">{`v${this.version}`}</span>
          </div>
        </div>
      </Host>
    );
  }
}
