import { h, Component, Prop, Element } from "@stencil/core";
import { calculateRotation } from "../../utils/calculate-rotation";

@Component({
  tag: "mg-course-loader",
  styleUrl: "course-loader.scss",
  scoped: true,
})
export class CourseLoader {
  @Element() private element: HTMLElement;
  @Prop({ reflect: true }) course: {
    code: string;
    unit: string;
    completed: number;
    downloadable: boolean;
    downloaded: boolean;
  };
  @Prop() active = false;

  downloadLinkHandler(e: Event) {
    this.course = { ...this.course, downloaded: true };
    e.preventDefault(); // Para evitar que o código realmente inicie um download
  }

  private setLoaderRotation() {
    const loaderRight = this.element.querySelector(
      ".card__inner-loader--right"
    ) as HTMLElement;
    const loaderLeft = this.element.querySelector(
      ".card__inner-loader--left"
    ) as HTMLElement;

    const rotation = calculateRotation(this.course.completed);

    loaderRight.style.transform = `rotate(${rotation.rightHalf}deg)`;
    loaderLeft.style.transform = `rotate(${rotation.leftHalf}deg)`;
  }

  componentDidLoad() {
    setTimeout(() => {
      this.setLoaderRotation();
    }, 0);
  }

  render() {
    return (
      <div
        class={`container ${this.course.downloaded && "container--downloaded"}`}
      >
        <div class="card__course">
          <h4
            class={`card__course-title ${
              this.active && "card__course-title--active"
            }`}
          >
            <span class="card__course-code">{this.course.code}</span>
            <span class="card__course-number">{this.course.unit}</span>
          </h4>

          <div class="card__loader card__loader--left">
            <div
              class={`card__inner-loader card__inner-loader--left ${
                this.active && "card__inner-loader--active"
              }`}
            ></div>
          </div>
          <div class="card__loader card__loader--right">
            <div
              class={`card__inner-loader card__inner-loader--right ${
                this.active && "card__inner-loader--active"
              }`}
            ></div>
          </div>
        </div>

        {this.course.downloadable && (
          <a
            class="btn btn--download"
            onClick={this.downloadLinkHandler.bind(this)}
            download
            href="#"
          >
            <mg-arrow-icon />
            <span class="btn__text">
              Download do material do curso {this.course.code}{" "}
              {this.course.unit}
            </span>
          </a>
        )}
      </div>
    );
  }
}
