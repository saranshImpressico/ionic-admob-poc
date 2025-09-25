import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { AdMob, BannerAdOptions, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      try {
      await AdMob.initialize();
      const trackingInfo = await AdMob.trackingAuthorizationStatus();
      if (trackingInfo.status === 'notDetermined') {
        await AdMob.requestTrackingAuthorization();
      }

      const options: BannerAdOptions = {
        adId: this.platform.is('android') ? 'ca-app-pub-3940256099942544/6300978111':'ca-app-pub-3940256099942544/2934735716',
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0
      };

      await AdMob.showBanner(options);
    } catch (error) {
      console.error('AdMob initialization failed:', error);
    }
    }
  }
}
