import SiteMenuView from './view/menu-view.js';
import BoardView from './view/board-view.js';
import SortView from './view/sort-view.js';
import PointListView from './view/point-list-view';
import PointView from './view/point-view.js';
import FiltersView from './view/filters-view.js';
import RouteView from './view/route-view.js';
import EditFormView from './view/edit-form-view';
import { render, RenderPosition } from './render.js';
import { generateRoutePoint } from './mock/routePoint';
//import { generateAllOffers } from './mock/routePoint';
const ROUTE_COUNT = 15;

const points = Array.from({ length: ROUTE_COUNT }, generateRoutePoint);
const route = generateRoutePoint();


//const offers = generateAllOffers();
const siteMainHeaderElement = document.querySelector('.trip-main');
const siteHeaderElement = siteMainHeaderElement.querySelector('.trip-main__trip-controls');
const siteMainElement = document.querySelector('.page-body__page-main');
const siteMainContainer = siteMainElement.querySelector('.page-body__container');


render(siteMainHeaderElement, new RouteView(route).element, RenderPosition.AFTERBEGIN);
render(siteHeaderElement, new SiteMenuView().element, RenderPosition.BEFOREEND);
render(siteHeaderElement, new FiltersView().element, RenderPosition.BEFOREEND);
const boardComponent = new BoardView();

render(siteMainContainer, boardComponent.element, RenderPosition.BEFOREEND);

render(boardComponent.element, new SortView().element, RenderPosition.AFTERBEGIN);
const pointListComponent = new PointListView();
render(boardComponent.element, pointListComponent.element, RenderPosition.BEFOREEND);

const renderPoint = (pointListElement, point) => {
  const pointComponent = new PointView(point);
  const pointEditComponent = new EditFormView();

  const replacePointToForm = () => {
    pointListElement.replaceChild(pointEditComponent.element, pointComponent.element);
  };

  const replaceFormToPoint = () => {
    pointListElement.replaceChild(pointComponent.element, pointEditComponent.element);
  };

  pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    replacePointToForm();
  });

  pointEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToPoint();
  });

  render(pointListElement, pointComponent.element, RenderPosition.BEFOREEND);
};
for (let i = 0; i < ROUTE_COUNT; i++) {
  renderPoint(pointListComponent.element, points[i]);
}


