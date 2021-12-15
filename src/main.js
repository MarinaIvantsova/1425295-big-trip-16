import { createSiteMenuTemplate } from './view/site-menu-view';
import { createSiteFiltersTemplate } from './view/site-filters-view';
import { createSiteSortTemplate } from './view/site-sort-view.js';
import { createSiteFormListTemplate } from './view/site-form-list-view.js';
import { createSiteAddFormTemplate } from './view/site-add-form-view.js';
import { createSiteFormEditTemplate } from './view/site-form-edit.js';
import { createSiteRouteTemplate } from './view/site-route-view.js';
import { createRoutePlaceTemplate } from './view/site-route-place.js';
import {renderTemplate, RenderPosition} from './render.js';
import { generateRoutePoint } from './mock/routePoint';
const ROUTE_COUNT = 15;

const routes = Array.from({length: ROUTE_COUNT}, generateRoutePoint);

const siteMainElement = document.querySelector('.trip-main');
const siteHeaderElement = siteMainElement.querySelector('.trip-main__trip-controls');
const siteTripEvents = document.querySelector('.page-body__page-main');
const siteTripEventsSort = siteTripEvents.querySelector('.trip-events');

renderTemplate(siteMainElement, createSiteRouteTemplate(), RenderPosition.BEFOREEND);

renderTemplate(siteHeaderElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteHeaderElement, createSiteFiltersTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteTripEventsSort, createSiteSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteTripEventsSort, createSiteFormListTemplate(), RenderPosition.BEFOREEND);

const siteTripEventsList = document.querySelector('.trip-events__list');
renderTemplate(siteTripEventsList, createSiteAddFormTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteTripEventsList, createSiteFormEditTemplate(routes)[0], RenderPosition.BEFOREEND);


for (let i = 0; i < ROUTE_COUNT; i++) {
  renderTemplate(siteTripEventsList, createRoutePlaceTemplate(routes[i]), RenderPosition.BEFOREEND);
}
