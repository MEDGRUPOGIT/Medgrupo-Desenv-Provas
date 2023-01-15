import { h, Component } from "@stencil/core";

@Component({
  tag: "mg-minus-icon",
  styleUrl: "icons.scss",
})
export class MinusIcon {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="192"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="40"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
      </svg>
    );
  }
}
