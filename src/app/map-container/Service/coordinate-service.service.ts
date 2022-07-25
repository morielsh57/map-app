import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICoordinateApiT } from 'src/app/shared/const/map.interfaces';
import { COORDINATE_BASE_URL_API } from 'src/app/shared/const/map.url';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};


@Injectable({ providedIn: 'root' })
export class CoordinateService {
    coordinateJsonSubject: BehaviorSubject<ICoordinateApiT[]> = new BehaviorSubject<ICoordinateApiT[]>([]);
    constructor(private http: HttpClient) { }

    getCoordinates(): Observable<ICoordinateApiT[]> {
        return this.http.get<ICoordinateApiT[]>(COORDINATE_BASE_URL_API);
    }

    addCoordinate(coordinate: ICoordinateApiT): Observable<ICoordinateApiT> {
        return this.http.post<ICoordinateApiT>(COORDINATE_BASE_URL_API, coordinate, httpOptions);
    }

}