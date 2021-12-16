import dayjs from 'dayjs';
export const createSiteRouteTemplate = (route) => {
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
