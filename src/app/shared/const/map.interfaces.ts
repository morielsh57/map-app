export interface ICoordinateApiT {
  id: number;
  clickTime: string;
  coordinates: ICoordinateT;
}

interface ICoordinateT {
  lon: number;
  lat: number;
}