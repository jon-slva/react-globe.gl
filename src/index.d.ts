import * as React from 'react';
import { Scene, Camera, WebGLRenderer, Object3D, Material } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ConfigOptions, GlobeInstance as GlobeKapsuleInstance } from 'globe.gl';

type Accessor<In, Out> = Out | string | ((obj: In) => Out);
type ObjAccessor<T> = Accessor<object, T>;
type HexBinAccessor<T> = Accessor<HexBin, T>;

interface HexBin {
  points: object[],
  sumWeight: number,
  center: { lat: number, lng: number }
}

interface GeoJsonGeometry {
  type: string;
  coordinates: number[];
}

interface TypeFace {}

type LabelOrientation = 'right' | 'top' | 'bottom';

interface GeoCoords {
  lat: number;
  lng: number;
  altitude: number;
}

interface CartesianCoords {
  x: number;
  y: number;
  z: number;
}

interface ScreenCoords {
  x: number;
  y: number;
}

export interface GlobeProps extends ConfigOptions {
  // Container layout
  width?: number;
  height?: number;
  backgroundColor?: string;
  backgroundImageUrl?: string | null;

  // Globe layer
  globeImageUrl?: string | null;
  bumpImageUrl?: string | null;
  showGlobe?: boolean;
  showGraticules?: boolean;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  globeMaterial?: Material;
  onGlobeReady?: () => void;
  onGlobeClick?: (coords: { lat, lng }, event: MouseEvent) => void;
  onGlobeRightClick?: (coords: { lat, lng }, event: MouseEvent) => void;

  // Points layer
  pointsData?: object[];
  pointLat?: ObjAccessor<number>;
  pointLng?: ObjAccessor<number>;
  pointColor?: ObjAccessor<string>;
  pointAltitude?: ObjAccessor<number>;
  pointRadius?: ObjAccessor<number>;
  pointResolution?: number;
  pointsMerge?: boolean;
  pointsTransitionDuration?: number;
  pointLabel?: ObjAccessor<string>;
  onPointClick?: (point: object, event: MouseEvent) => void;
  onPointRightClick?: (point: object, event: MouseEvent) => void;
  onPointHover?: (point: object | null, prevPoint: object | null) => void;

  // Arcs layer
  arcsData?: object[];
  arcStartLat?: ObjAccessor<number>;
  arcStartLng?: ObjAccessor<number>;
  arcEndLat?: ObjAccessor<number>;
  arcEndLng?: ObjAccessor<number>;
  arcColor?: ObjAccessor<string | string[] | ((t: number) => string)>;
  arcAltitude?: ObjAccessor<number | null>;
  arcAltitudeAutoScale?: ObjAccessor<number>;
  arcStroke?: ObjAccessor<number | null>;
  arcCurveResolution?: number;
  arcCircularResolution?: number;
  arcDashLength?: ObjAccessor<number>;
  arcDashGap?: ObjAccessor<number>;
  arcDashInitialGap?: ObjAccessor<number>;
  arcDashAnimateTime?: ObjAccessor<number>;
  arcsTransitionDuration?: number;
  arcLabel?: ObjAccessor<string>;
  onArcClick?: (arc: object, event: MouseEvent) => void;
  onArcRightClick?: (arc: object, event: MouseEvent) => void;
  onArcHover?: (arc: object | null, prevArc: object | null) => void;

  // Polygons layer
  polygonsData?: object[];
  polygonGeoJsonGeometry?: ObjAccessor<GeoJsonGeometry>;
  polygonCapColor?: ObjAccessor<string>;
  polygonCapMaterial?: ObjAccessor<Material>;
  polygonSideColor?: ObjAccessor<string>;
  polygonSideMaterial?: ObjAccessor<Material>;
  polygonStrokeColor?: ObjAccessor<string | boolean | null>;
  polygonAltitude?: ObjAccessor<number>;
  polygonCapCurvatureResolution?: ObjAccessor<number>;
  polygonsTransitionDuration?: number;
  polygonLabel?: ObjAccessor<string>;
  onPolygonClick?: (polygon: object, event: MouseEvent) => void;
  onPolygonRightClick?: (polygon: object, event: MouseEvent) => void;
  onPolygonHover?: (polygon: object | null, prevPolygon: object | null) => void;

  // Paths layer
  pathsData?: object[];
  pathPoints?: ObjAccessor<any[]>;
  pathPointLat?: Accessor<any, number>;
  pathPointLng?: Accessor<any, number>;
  pathPointAlt?: Accessor<any, number>;
  pathResolution?: number;
  pathColor?: ObjAccessor<string | string[] | ((t: number) => string)>;
  pathStroke?: ObjAccessor<number | null>;
  pathDashLength?: ObjAccessor<number>;
  pathDashGap?: ObjAccessor<number>;
  pathDashInitialGap?: ObjAccessor<number>;
  pathDashAnimateTime?: ObjAccessor<number>;
  pathTransitionDuration?: number;
  pathLabel?: ObjAccessor<string>;
  onPathClick?: (path: object, event: MouseEvent) => void;
  onPathRightClick?: (path: object, event: MouseEvent) => void;
  onPathHover?: (path: object | null, prevPath: object | null) => void;

  // Hex Bin layer
  hexBinPointsData?: object[];
  hexBinPointLat?: ObjAccessor<number>;
  hexBinPointLng?: ObjAccessor<number>;
  hexBinPointWeight?: ObjAccessor<number>;
  hexBinResolution?: number;
  hexMargin?: HexBinAccessor<number>;
  hexAltitude?: HexBinAccessor<number>;
  hexTopCurvatureResolution?: number;
  hexTopColor?: HexBinAccessor<string>;
  hexSideColor?: HexBinAccessor<string>;
  hexBinMerge?: boolean;
  hexTransitionDuration?: number;
  hexLabel?: HexBinAccessor<string>;
  onHexClick?: (hex: HexBin, event: MouseEvent) => void;
  onHexRightClick?: (hex: HexBin, event: MouseEvent) => void;
  onHexHover?: (hex: HexBin | null, prevHex: HexBin | null) => void;

  // Hexed Polygons layer
  hexPolygonsData?: object[];
  hexPolygonGeoJsonGeometry?: ObjAccessor<GeoJsonGeometry>;
  hexPolygonColor?: ObjAccessor<string>;
  hexPolygonAltitude?: ObjAccessor<number>;
  hexPolygonResolution?: ObjAccessor<number>;
  hexPolygonMargin?: ObjAccessor<number>;
  hexPolygonCurvatureResolution?: ObjAccessor<number>;
  hexPolygonsTransitionDuration?: number;
  hexPolygonLabel?: ObjAccessor<string>;
  onHexPolygonClick?: (polygon: object, event: MouseEvent) => void;
  onHexPolygonRightClick?: (polygon: object, event: MouseEvent) => void;
  onHexPolygonHover?: (polygon: object | null, prevPolygon: object | null) => void;

  // Tiles layer
  tilesData?: object[];
  tileLat?: ObjAccessor<number>;
  tileLng?: ObjAccessor<number>;
  tileAltitude?: ObjAccessor<number>;
  tileWidth?: ObjAccessor<number>;
  tileHeight?: ObjAccessor<number>;
  tileUseGlobeProjection?: ObjAccessor<boolean>;
  tileMaterial?: ObjAccessor<Material>;
  tileCurvatureResolution?: ObjAccessor<number>;
  tilesTransitionDuration?: number;
  tileLabel?: ObjAccessor<string>;
  onTileClick?: (tile: object, event: MouseEvent) => void;
  onTileRightClick?: (tile: object, event: MouseEvent) => void;
  onTileHover?: (tile: object | null, prevTile: object | null) => void;

  // Rings Layer
  ringsData?: object[];
  ringLat?: ObjAccessor<number>;
  ringLng?: ObjAccessor<number>;
  ringAltitude?: ObjAccessor<number>;
  ringColor?: ObjAccessor<string | string[] | ((t: number) => string)>;
  ringResolution?: number;
  ringMaxRadius?: ObjAccessor<number>;
  ringPropagationSpeed?: ObjAccessor<number>;
  ringRepeatPeriod?: ObjAccessor<number>;

  // Labels layer
  labelsData?: object[];
  labelLat?: ObjAccessor<number>;
  labelLng?: ObjAccessor<number>;
  labelText?: ObjAccessor<string>;
  labelColor?: ObjAccessor<string>;
  labelAltitude?: ObjAccessor<number>;
  labelSize?: ObjAccessor<number>;
  labelTypeFace?: TypeFace;
  labelRotation?: ObjAccessor<number>;
  labelResolution?: number;
  labelIncludeDot?: ObjAccessor<boolean>;
  labelDotRadius?: ObjAccessor<number>;
  labelDotOrientation?: ObjAccessor<LabelOrientation>;
  labelsTransitionDuration?: number;
  labelLabel?: ObjAccessor<string>;
  onLabelClick?: (label: object, event: MouseEvent) => void;
  onLabelRightClick?: (label: object, event: MouseEvent) => void;
  onLabelHover?: (label: object | null, prevLabel: object | null) => void;

  // Custom layer
  customLayerData?: object[];
  customThreeObject?: Object3D | string | ((d: object, globeRadius: number) => Object3D);
  customThreeObjectUpdate?: string | ((obj: Object3D, objData: object, globeRadius: number) => void);
  customLayerLabel?: ObjAccessor<string>;
  onCustomLayerClick?: (obj: object, event: MouseEvent) => void;
  onCustomLayerRightClick?: (obj: object, event: MouseEvent) => void;
  onCustomLayerHover?: (obj: object | null, prevObj: object | null) => void;

  // Render control
  enablePointerInteraction?: boolean;
  pointerEventsFilter?: (object: Object3D, data?: object) => boolean;
  lineHoverPrecision?: number;
  onZoom?: (pov: GeoCoords) => void;
}

export interface GlobeMethods {
  // Render control
  pointOfView(): GeoCoords;
  pointOfView(pov: { lat?: number, lng?: number, altitude?: number }, transitionMs?: number): GlobeKapsuleInstance;
  pauseAnimation(): GlobeKapsuleInstance;
  resumeAnimation(): GlobeKapsuleInstance;
  scene(): Scene;
  camera(): Camera;
  renderer(): WebGLRenderer;
  postProcessingComposer(): EffectComposer;
  controls(): object;

  // Utilities
  getCoords(lat: number, lng: number, altitude?: number): CartesianCoords;
  getScreenCoords(lat: number, lng: number, altitude?: number): ScreenCoords;
  toGeoCoords(coords: CartesianCoords): GeoCoords;
  toGlobeCoords(x: number, y: number): { lat: number, lng: number} | null;
}

type FCwithRef<P = {}, R = {}> = React.FunctionComponent<P & { ref?: React.MutableRefObject<R | undefined> }>;

declare const Globe: FCwithRef<GlobeProps, GlobeMethods>;

export default Globe;
