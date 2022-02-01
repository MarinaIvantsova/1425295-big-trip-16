import {createElement} from '../render.js';

const createTaskListTemplate = () => `<ul class="trip-events__list">
</ul>`;

export default class PointListView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createTaskListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
