import dayjs from 'dayjs';
import { createElement } from '../render.js';

const createRouteTemplate = (route) => {
  const { destination, dateTo, dateFrom, price } = route;
  const startTime = dayjs(dateFrom).format('MMM DD');
  const endTime = dayjs(dateTo).format('DD');
  return ` <section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">${destination} &mdash; ${destination} &mdash; ${destination}</h1>

              <p class="trip-info__dates">${startTime}&nbsp;&mdash;&nbsp;${endTime}</p>
            </div>

            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
            </p>
          </section>
          `;
};
export default class RouteView {
  #element = null;
  #routes = null;

  constructor(routes) {
    this.#routes = routes;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createRouteTemplate(this.#routes);
  }

  removeElement() {
    this.#element = null;
  }
}
