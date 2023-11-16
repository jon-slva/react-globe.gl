import fromKapsule from 'react-kapsule';
import GlobeKapsule from 'globe.gl';
import PropTypes from 'prop-types';

var GlobePropTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  backgroundImageUrl: PropTypes.string,
  globeImageUrl: PropTypes.string,
  bumpImageUrl: PropTypes.string,
  showGlobe: PropTypes.bool,
  showGraticules: PropTypes.bool,
  showAtmosphere: PropTypes.bool,
  atmosphereColor: PropTypes.string,
  atmosphereAltitude: PropTypes.number,
  globeMaterial: PropTypes.object,
  onGlobeReady: PropTypes.func,
  onGlobeClick: PropTypes.func,
  onGlobeRightClick: PropTypes.func,
  pointsData: PropTypes.arrayOf(PropTypes.object),
  pointLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pointLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pointColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  pointAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pointRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pointResolution: PropTypes.number,
  pointsMerge: PropTypes.bool,
  pointsTransitionDuration: PropTypes.number,
  pointLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onPointClick: PropTypes.func,
  onPointRightClick: PropTypes.func,
  onPointHover: PropTypes.func,
  arcsData: PropTypes.arrayOf(PropTypes.object),
  arcStartLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcStartLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcEndLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcEndLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.func]),
  arcAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcAltitudeAutoScale: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcStroke: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcCurveResolution: PropTypes.number,
  arcCircularResolution: PropTypes.number,
  arcDashLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcDashGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcDashInitialGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcDashAnimateTime: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  arcsTransitionDuration: PropTypes.number,
  arcLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onArcClick: PropTypes.func,
  onArcRightClick: PropTypes.func,
  onArcHover: PropTypes.func,
  polygonsData: PropTypes.arrayOf(PropTypes.object),
  polygonGeoJsonGeometry: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  polygonCapColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  polygonCapMaterial: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  polygonSideColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  polygonSideMaterial: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  polygonStrokeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  polygonAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  polygonCapCurvatureResolution: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  polygonsTransitionDuration: PropTypes.number,
  polygonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onPolygonClick: PropTypes.func,
  onPolygonRightClick: PropTypes.func,
  onPolygonHover: PropTypes.func,
  pathsData: PropTypes.array,
  pathPoints: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.func]),
  pathPointLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pathPointLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pathPointAlt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pathResolution: PropTypes.number,
  pathColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.func]),
  pathStroke: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pathDashLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pathDashGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pathDashInitialGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pathDashAnimateTime: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  pathTransitionDuration: PropTypes.number,
  pathLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onPathClick: PropTypes.func,
  onPathRightClick: PropTypes.func,
  onPathHover: PropTypes.func,
  heatmapsData: PropTypes.array,
  heatmapPoints: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.func]),
  heatmapPointLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  heatmapPointLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  heatmapPointWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  heatmapBandwidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  heatmapColorFn: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  heatmapColorSaturation: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  heatmapBaseAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  heatmapTopAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  heatmapsTransitionDuration: PropTypes.number,
  onHeatmapClick: PropTypes.func,
  onHeatmapRightClick: PropTypes.func,
  onHeatmapHover: PropTypes.func,
  hexBinPointsData: PropTypes.arrayOf(PropTypes.object),
  hexBinPointLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  hexBinPointLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  hexBinPointWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  hexBinResolution: PropTypes.number,
  hexMargin: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  hexTopColor: PropTypes.func,
  hexSideColor: PropTypes.func,
  hexAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  hexTopCurvatureResolution: PropTypes.number,
  hexBinMerge: PropTypes.bool,
  hexTransitionDuration: PropTypes.number,
  hexLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onHexClick: PropTypes.func,
  onHexRightClick: PropTypes.func,
  onHexHover: PropTypes.func,
  hexPolygonsData: PropTypes.arrayOf(PropTypes.object),
  hexPolygonGeoJsonGeometry: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  hexPolygonColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  hexPolygonAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  hexPolygonResolution: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  hexPolygonMargin: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  hexPolygonUseDots: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  hexPolygonCurvatureResolution: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  hexPolygonDotResolution: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  hexPolygonsTransitionDuration: PropTypes.number,
  hexPolygonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onHexPolygonClick: PropTypes.func,
  onHexPolygonRightClick: PropTypes.func,
  onHexPolygonHover: PropTypes.func,
  tilesData: PropTypes.arrayOf(PropTypes.object),
  tileLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  tileLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  tileAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  tileWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  tileHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  tileUseGlobeProjection: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  tileMaterial: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  tileCurvatureResolution: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  tilesTransitionDuration: PropTypes.number,
  tileLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onTileClick: PropTypes.func,
  onTileRightClick: PropTypes.func,
  onTileHover: PropTypes.func,
  ringsData: PropTypes.arrayOf(PropTypes.object),
  ringLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  ringLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  ringAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  ringColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.func]),
  ringResolution: PropTypes.number,
  ringMaxRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  ringPropagationSpeed: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  ringRepeatPeriod: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  labelsData: PropTypes.arrayOf(PropTypes.object),
  labelLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  labelLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  labelAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  labelRotation: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  labelSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  labelTypeFace: PropTypes.object,
  labelColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  labelResolution: PropTypes.number,
  labelIncludeDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  labelDotRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  labelDotOrientation: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  labelsTransitionDuration: PropTypes.number,
  labelLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onLabelClick: PropTypes.func,
  onLabelRightClick: PropTypes.func,
  onLabelHover: PropTypes.func,
  htmlElementsData: PropTypes.arrayOf(PropTypes.object),
  htmlLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  htmlLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  htmlAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  htmlElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  htmlTransitionDuration: PropTypes.number,
  objectsData: PropTypes.arrayOf(PropTypes.object),
  objectLat: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  objectLng: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  objectAltitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  objectRotation: PropTypes.oneOfType([PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number
  }), PropTypes.string, PropTypes.func]),
  objectFacesSurface: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  objectThreeObject: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  objectLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onObjectClick: PropTypes.func,
  onObjectRightClick: PropTypes.func,
  onObjectHover: PropTypes.func,
  customLayerData: PropTypes.arrayOf(PropTypes.object),
  customThreeObject: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  customThreeObjectUpdate: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  customLayerLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onCustomLayerClick: PropTypes.func,
  onCustomLayerRightClick: PropTypes.func,
  onCustomLayerHover: PropTypes.func,
  enablePointerInteraction: PropTypes.bool,
  pointerEventsFilter: PropTypes.func,
  lineHoverPrecision: PropTypes.number,
  onZoom: PropTypes.func
};

var Globe = fromKapsule(GlobeKapsule, {
  methodNames: [
  // bind methods
  'pauseAnimation', 'resumeAnimation', 'pointOfView', 'lights', 'scene', 'camera', 'renderer', 'postProcessingComposer', 'controls', 'getGlobeRadius', 'getCoords', 'getScreenCoords', 'toGeoCoords', 'toGlobeCoords'],
  initPropNames: ['animateIn', 'waitForGlobeReady', 'rendererConfig']
});
Globe.displayName = 'Globe';
Globe.propTypes = GlobePropTypes;

export { Globe as default };
