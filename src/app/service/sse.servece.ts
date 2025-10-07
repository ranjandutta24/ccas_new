import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://10.150.6.15:4060/api/';
// const baseURL = 'http://59.97.132.209:4060/api/';

// http://localhost:4020/api/ccas/comp1

@Injectable({
  providedIn: 'root',
})
export class SseService {
  constructor(private zone: NgZone) {}

  getServerSentEvent(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'utility/ccas_dashboard');

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
      const eventSource = new EventSource(baseURL + 'utility/ccas_trend');

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
  getSSEbyshop(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'utility/ccas_byshop');

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

  getSSEestatus(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'ccas/e_status');

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

  getSSEComp(endURL: String): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'ccas/' + endURL);

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
}
