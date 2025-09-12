import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

// const baseURL = 'http://10.150.6.15:4060/api/';
const baseURL = 'http://59.97.132.209:4060/api/';

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

  // getSSETrend(): Observable<any> {
  //   return new Observable((observer) => {
  //     const eventSource = new EventSource(baseURL + 'utility/ccas_trend');

  //     // if you used "event: trend"
  //     eventSource.addEventListener('trend', (event: any) => {
  //       observer.next(JSON.parse(event.data));
  //     });

  //     eventSource.onerror = (err) => {
  //       observer.error(err);
  //       eventSource.close();
  //     };

  //     return () => eventSource.close();
  //   });
  // }

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
}

// trend: [{"_id":"68c3b4109e033135e44b597d","IGCAF":24293.8,"IGCAP":0,"PGCAF":18562.5,"PGCAP":0,"DATE":"2025-09-12T05:48:00.372Z"},{"_id":"68c3b3d49e033135e44b58db","IGCAF":24893.8,"IGCAP":0,"PGCAF":17737.5,"PGCAP":0,"DATE":"2025-09-12T05:47:00.355Z"},{"_id":"68c3b3989e033135e44b5830","IGCAF":23540.6,"IGCAP":0,"PGCAF":17793.8,"PGCAP":0,"DATE":"2025-09-12T05:46:00.433Z"},{"_id":"68c3b35c9e033135e44b578a","IGCAF":24903.1,"IGCAP":0,"PGCAF":17906.3,"PGCAP":0,"DATE":"2025-09-12T05:45:00.410Z"},{"_id":"68c3b3209e033135e44b56dd","IGCAF":24840.6,"IGCAP":0,"PGCAF":18493.8,"PGCAP":0,"DATE":"2025-09-12T05:44:00.313Z"},{"_id":"68c3b2e49e033135e44b5633","IGCAF":24737.5,"IGCAP":0,"PGCAF":18168.8,"PGCAP":0,"DATE":"2025-09-12T05:43:00.349Z"},{"_id":"68c3b2a89e033135e44b5580","IGCAF":24243.8,"IGCAP":0,"PGCAF":17356.3,"PGCAP":0,"DATE":"2025-09-12T05:42:00.343Z"},{"_id":"68c3b26c9e033135e44b54dd","IGCAF":24640.6,"IGCAP":0,"PGCAF":18487.5,"PGCAP":0,"DATE":"2025-09-12T05:41:00.347Z"},{"_id":"68c3b2309e033135e44b5431","IGCAF":24662.5,"IGCAP":0,"PGCAF":18487.5,"PGCAP":0,"DATE":"2025-09-12T05:40:00.390Z"},{"_id":"68c3b1f49e033135e44b5389","IGCAF":24496.9,"IGCAP":0,"PGCAF":17828.1,"PGCAP":0,"DATE":"2025-09-12T05:39:00.380Z"},{"_id":"68c3b1b89e033135e44b52d6","IGCAF":24343.8,"IGCAP":0,"PGCAF":17659.4,"PGCAP":0,"DATE":"2025-09-12T05:38:00.345Z"},{"_id":"68c3b17c9e033135e44b5225","IGCAF":24809.4,"IGCAP":0,"PGCAF":18303.1,"PGCAP":0,"DATE":"2025-09-12T05:37:00.446Z"},{"_id":"68c3b1409e033135e44b5178","IGCAF":24103.1,"IGCAP":0,"PGCAF":17418.8,"PGCAP":0,"DATE":"2025-09-12T05:36:00.488Z"},{"_id":"68c3b1049e033135e44b50d1","IGCAF":24265.6,"IGCAP":0,"PGCAF":17384.4,"PGCAP":0,"DATE":"2025-09-12T05:35:00.311Z"},{"_id":"68c3b0c89e033135e44b5027","IGCAF":24559.4,"IGCAP":0,"PGCAF":18184.4,"PGCAP":0,"DATE":"2025-09-12T05:34:00.355Z"},{"_id":"68c3b08c9e033135e44b4f85","IGCAF":23912.5,"IGCAP":0,"PGCAF":18375,"PGCAP":0,"DATE":"2025-09-12T05:33:00.372Z"}]
