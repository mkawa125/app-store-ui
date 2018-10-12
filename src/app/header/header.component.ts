import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  image_one = 'assets/images/slack.jpeg';
  google_drive = 'assets/images/google-drive.jpeg';
  sales_force = 'assets/images/sales-force.jpeg';
  jira_cloud = 'assets/images/jira.png';
  video_call = 'assets/images/video-call.png';
  waziri = 'assets/images/waziri.jpg';
  blue_drive = 'assets/images/blue-drive.png'
  constructor() { }

  ngOnInit() {
  }

}
