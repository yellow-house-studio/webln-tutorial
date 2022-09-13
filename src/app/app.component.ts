import { Component } from '@angular/core';
import { GetInfoResponse, requestProvider, WebLNProvider } from 'webln';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'webln-tutorial';
  public webLnEnabled: boolean = false;
  public nodeInfo: GetInfoResponse | undefined = undefined;

  public weblnProvider: WebLNProvider | undefined = undefined;

  public async connectProvider(): Promise<void> {
    try {
      this.weblnProvider = await requestProvider();
      console.log(this.weblnProvider);
    } catch (error) {
    }
  }

  public checkEnabled(): void {
    this.weblnProvider?.enable().then(() => {
      this.webLnEnabled = true;
    }).catch(() => {
      this.webLnEnabled = false;
    });
  }

  public async getInfo(): Promise<void> {
    try {
      this.nodeInfo = await this.weblnProvider?.getInfo();
    } catch (error) {

    }
  }

  public makeInvoice(): void {

  }

  public sendPayment(): void {

  }

  public keySend(): void {

  }
}
