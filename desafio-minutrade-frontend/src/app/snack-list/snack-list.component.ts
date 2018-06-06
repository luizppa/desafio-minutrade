import { Component, OnInit } from '@angular/core'
import { SnackService } from '../shared/snack.service'
import Snack from '../snack/snack.model'

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit {
  snacks: Snack[] = []
  subscription

  constructor(private snackService: SnackService) { }

  ngOnInit() {
    this.subscription = this.snackService.snacksChanged.subscribe((snacks) => {
      this.snacks = snacks
    })
    this.snackService.fetchSnacks()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
