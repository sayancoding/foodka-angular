import { Component, OnInit, Input } from "@angular/core";
import { AddressDeliverTimeService } from 'src/app/services/addressDeliverTime.service';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleDateComponent } from 'src/app/scheduleDate/scheduleDate.component';
import { Address } from 'src/app/models/address';
import { DeliveryTime } from 'src/app/models/deliveryTime';

@Component({
  selector: "app-resturantNavbar",
  templateUrl: "./resturantNavbar.component.html",
  styleUrls: ["./resturantNavbar.component.css"]
})
export class ResturantNavbarComponent implements OnInit {
  @Input() loggedUserName: string = "sounish";
  public addresses: Address[];
  public timmings: DeliveryTime[];
  scheduleSlot: string = '' ;
  
  constructor(private _addressDeliveryService: AddressDeliverTimeService, private _matDialog: MatDialog ) {}

  ngOnInit() {
    this.addresses = this._addressDeliveryService.getAddress();
    this.timmings = this._addressDeliveryService.getTimmings();
  }

  openDialog = () => {
    const diaLogRef = this._matDialog.open(ScheduleDateComponent, {
      width: '400px',
      data: {
          scheduleSlot: this.scheduleSlot, 
          loggedUserName: this.loggedUserName 
        }
    });

    // diaLogRef.afterClosed().subscribe((res) => {
    //   this.scheduleSlot = res
    // })

  }


}
