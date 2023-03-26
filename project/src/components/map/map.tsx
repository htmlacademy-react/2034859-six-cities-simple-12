import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts';
import { City } from '../../types/city';
import { Location } from '../../types/location';
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  city: City;
  points: Location[];
  selectedPoint: Location;
  cssClassOfMap: string;
};

function Map({ city, points, selectedPoint, cssClassOfMap }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: ((point.latitude === selectedPoint.latitude) && (point.longitude === selectedPoint.longitude))
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);


  return (
    <section className={`${cssClassOfMap} map`}>
      <div style={{ height: '100%' }} ref={mapRef} />
    </section>
  );
}


export default Map;
