import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private feedUrl: string = 'https%3A%2F%2Fwww.ion-book.com%2Ffeed.xml';
  private feeds: any;

  constructor (
    private feedService: FeedService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }
}
