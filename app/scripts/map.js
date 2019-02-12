/* eslint-disable */

'use strict';

ymaps.ready(init);

function init() {
  const mapCenter = [55.748159, 37.540245];
  const mapElement = document.getElementById('map');
  const mapOptions = {
    center: mapCenter,
    zoom: 16,
    controls: [],
  };

  const map = new ymaps.Map(mapElement, mapOptions);

  const fullscreenControlObject = new ymaps.control.FullscreenControl({
    options: {
      position: {
        top: 10,
        right: 10,
      },
    },
  });

  const zoomControlObject = new ymaps.control.ZoomControl({
    options: {
      position: {
        top: 10,
        left: 10,
      },
      size: 'small',
    },
  });

  const marker = new ymaps.Placemark(
    mapCenter,
    {
      balloonContentHeader: 'CTIG',
      balloonContentBody: 'Москва, Пресненская наб. 6, стр. 2, башня «Империя», 16 этаж, ММДЦ «Москва-Сити»',
    },
    {
      preset: 'islands#darkGreenDotIcon',
    },
  );

  map.behaviors.disable('scrollZoom');
  map.controls.add(zoomControlObject);
  map.controls.add(fullscreenControlObject);
  map.geoObjects.add(marker);
}
