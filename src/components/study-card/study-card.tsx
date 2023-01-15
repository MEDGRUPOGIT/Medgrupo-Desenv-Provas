import { h, Component, State, Element, Listen, Prop } from "@stencil/core";

@Component({
  tag: "mg-study-card",
  styleUrl: "study-card.scss",
  scoped: true,
})
export class StudyCard {
  @Element() element: HTMLElement;
  @Prop() week: string;
  @Prop() startDate: string;
  @Prop() endDate: string;
  @Prop() courses: {
    code: string;
    unit: string;
    completed: number;
    downloadable: boolean;
    downloaded: boolean;
  }[];
  @State() active = false;
  @State() rotated = false;

  @Listen("resize", { target: "window" })
  windowResizedHandler() {
    this.cardResizeHandler();
  }

  cardRotateHandler() {
    this.rotated = !this.rotated;
  }

  cardClickHandler(e: Event) {
    const target = e.target as HTMLElement;
    const btns = this.element.querySelectorAll<HTMLElement>(".btn");
    const shouldActivate = Array.from(btns).every((btn) => {
      return (
        (target.contains(btn) && target !== btn) ||
        (!target.contains(btn) && !btn.contains(target))
      );
    });

    if (shouldActivate) {
      this.active = !this.active;
    }
  }

  cardResizeHandler() {
    const card = this.element.querySelector(".card") as HTMLElement;
    const { height } = card
      .querySelector(".card__front")
      .getBoundingClientRect();

    card.style.height = `${height}px`;
  }

  cardAcessibilityHandler() {
    const card = this.element.querySelector(".card__inner") as HTMLElement;
    card.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        this.cardClickHandler(e);
      }
    });
  }

  componentDidLoad() {
    this.cardResizeHandler();
    this.cardAcessibilityHandler();
  }

  render() {
    return (
      <article class="card">
        <div
          onClick={this.cardClickHandler.bind(this)}
          class={`card__inner ${this.active && "card__inner--active"} ${
            this.rotated && "card__inner--rotate"
          }`}
          tabIndex={0}
        >
          <div class={`card__front ${this.rotated && "card__front--rotate"}`}>
            <div class="card__first-column">
              <h3 class="card__title">
                <div>Semana</div>
                <div class="card__title-number">{this.week}</div>
              </h3>

              <button
                onClick={this.cardRotateHandler.bind(this)}
                class="btn btn--front"
                type="button"
                tabIndex={this.rotated ? -1 : 0}
              >
                <span class="btn__text">Expandir</span>
                <mg-plus-icon />
              </button>
            </div>

            <div class="card__second-column">
              {this.courses.map((course) => (
                <mg-course-loader
                  course={{
                    ...course,
                    downloadable: false,
                    downloaded: false,
                  }}
                  active={this.active}
                />
              ))}
            </div>
          </div>

          <div class="card__back">
            <div class="card__first-column">
              <h3 class="card__title">
                <div>{this.startDate}</div>
                <div>{this.endDate}</div>
              </h3>

              <button
                onClick={this.cardRotateHandler.bind(this)}
                class="btn btn--back"
                type="button"
                tabIndex={this.rotated ? 0 : -1}
              >
                <span class="btn__text">Retrair</span>
                <mg-minus-icon />
              </button>
            </div>

            <div class="card__second-column">
              {this.courses.map((course) => (
                <mg-course-loader course={course} active={this.active} />
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }
}
