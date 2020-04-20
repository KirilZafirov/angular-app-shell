import { DialogComponent } from './dialog/dialog.component';
import { Component, Inject } from '@angular/core';
import { SwPush } from '@angular/service-worker'; 
import { MatDialog , MatDialogConfig , MatDialogRef} from '@angular/material/dialog';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-shell';

  readonly VAPID_PUBLIC_KEY = 'BEBCnSNrVIMTYfrfEpr_ITOrTSpoPe7U4XExpdXcIsc-LK0TugGTq_K2EsdKXA0P8pKEf438kD1k59yXYMEGOKY'

  /**
   *
   */
  constructor(
    private dialog: MatDialog ,
    private swPush: SwPush,
    @Inject(DOCUMENT) private document: Document) {
     
  }
  
  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };
    this.dialog.open(DialogComponent, dialogConfig);

     
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );   
  }
  // {"publicKey":'BEBCnSNrVIMTYfrfEpr_ITOrTSpoPe7U4XExpdXcIsc-LK0TugGTq_K2EsdKXA0P8pKEf438kD1k59yXYMEGOKY',
  // "privateKey":"c1PQW3M706KcIN6nVRVItpxQ5A0VgjEzldpZipb25QY"} 
}
