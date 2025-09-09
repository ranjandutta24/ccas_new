import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SseService {
  constructor(private zone: NgZone) {}

  getServerSentEvent(url: string): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) => {
        this.zone.run(() => {
          observer.next(JSON.parse(event.data));
        });
      };

      eventSource.onerror = (error) => {
        this.zone.run(() => {
          observer.error(error);
        });
      };

      return () => {
        eventSource.close();
      };
    });
  }

  getSSETrend(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(
        'http://10.150.6.15:4060/api/utility/ccas_trend'
      );

      // if you used "event: trend"
      eventSource.addEventListener('trend', (event: any) => {
        observer.next(JSON.parse(event.data));
      });

      eventSource.onerror = (err) => {
        observer.error(err);
        eventSource.close();
      };

      return () => eventSource.close();
    });
  }

  // getSSETrend(): Observable<any> {
  //   return new Observable((observer) => {
  //     const eventSource = new EventSource(
  //       'http://10.150.6.15:4060/api/utility/ccas_trend'
  //     );

  //     eventSource.onmessage = (event) => {
  //       this.zone.run(() => {
  //         observer.next(JSON.parse(event.data));
  //       });
  //     };

  //     eventSource.onerror = (error) => {
  //       this.zone.run(() => {
  //         observer.error(error);
  //       });
  //     };

  //     return () => {
  //       eventSource.close();
  //     };
  //   });
  // }
}
