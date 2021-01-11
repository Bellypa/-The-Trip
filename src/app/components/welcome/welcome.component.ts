import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import * as NGYTPackage from '../../package.json';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  projectUrl = 'https://www.youtube.com/results?search_query=akagera';
  urlSafe: SafeResourceUrl;
  articles = [
    {
      id: '1',
      title: 'Lirem Ipsum Dolor Sit Amet Libera Sequitor',   
      contents: `Sed auctor, purus et elementum gravida, felis augue faucibus velit, nec aliquet leo tellus eget
      purus. Sed est metus, placerat at, commodo ut, ultrices cursus, mauris. Cum sociis natoque penatibus`,
      image: 'assets/images/_thumb1.jpg',
      publishedOn: 'On April 20, 2009',
      postedBy: 'Kagame Geoffrey'
    },
    {
      id: '2',
      title: 'Lorem Ipsum Dolor Sit Amet Libera Sequitor',   
      contents: `Sed auctor, purus et elementum gravida, felis augue faucibus velit, nec aliquet leo tellus eget
      purus. Sed est metus, placerat at, commodo ut, ultrices cursus, mauris. Cum sociis natoque penatibus`,
      image: 'assets/images/_thumb2.jpg',
      publishedOn: 'On April 20, 2009',
      postedBy: 'Kagame Geoffrey'
    },
    {
      id: '3',
      title: 'Lorem Ipsum Dolor Sit Amet Libera Sequitor',   
      contents: `Sed auctor, purus et elementum gravida, felis augue faucibus velit, nec aliquet leo tellus eget
      purus. Sed est metus, placerat at, commodo ut, ultrices cursus, mauris. Cum sociis natoque penatibus`,
      image: 'assets/images/_thumb3.jpg',
      publishedOn: 'On April 20, 2009',
      postedBy: 'Kagame Geoffrey'
    },
    {
      id: '4',
      title: 'Lorem Ipsum Dolor Sit Amet Libera Sequitor',   
      contents: `Sed auctor, purus et elementum gravida, felis augue faucibus velit, nec aliquet leo tellus eget
      purus. Sed est metus, placerat at, commodo ut, ultrices cursus, mauris. Cum sociis natoque penatibus`,
      image: 'assets/images/_thumb5.jpg',
      publishedOn: 'On April 20, 2009',
      postedBy: 'Kagame Geoffrey'
    },
    {
      id: '5',
      title: 'Lorem Ipsum Dolor Sit Amet Libera Sequitor',   
      contents: `Sed auctor, purus et elementum gravida, felis augue faucibus velit, nec aliquet leo tellus eget
      purus. Sed est metus, placerat at, commodo ut, ultrices cursus, mauris. Cum sociis natoque penatibus`,
      image: 'assets/images/_thumb2.jpg',
      publishedOn: 'On April 20, 2009',
      postedBy: 'Kagame Geoffrey'
    }
  ]







  constructor(public sanitizer: DomSanitizer) { 
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.projectUrl);
  }

  ngOnInit() {
    // 
  }


  
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  skip(value) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }

}
