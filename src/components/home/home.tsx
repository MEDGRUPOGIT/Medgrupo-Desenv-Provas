import { h, Component } from "@stencil/core";
import { studiesTimeline } from "../../mock/mock-data";

@Component({
  tag: "mg-home",
  styleUrl: "home.scss",
  scoped: true,
})
export class Home {
  render() {
    return (
      <main class="container">
        <section class="studies">
          <h2 class="studies__title">Cronograma de estudos</h2>

          <ul class="studies__timeline" role="tablist">
            {studiesTimeline.map((timeline) => (
              <li role="tab">
                <mg-study-card {...timeline} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}
