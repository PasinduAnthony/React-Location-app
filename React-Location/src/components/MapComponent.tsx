import "ol/ol.css";
import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import { Tile } from "ol/layer";
import { OSM } from "ol/source";
import "../assets/map.css";

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const mapObj = new Map({
      view: new View({
        center: [-11000000, 4600000],
        zoom: 4,
      }),
      layers: [new Tile({ source: new OSM() })],
    });

    mapObj.setTarget(mapRef.current);

    return () => mapObj.setTarget("");
  }, []);

  return <div className="map" ref={mapRef} />;
};

export default MapComponent;
