import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
})
export class AppRoot {
  render() {
    return (
      <div>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="mg-home" exact={true} />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
