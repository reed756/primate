import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper

  step?: any = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
    this.step = this.swiper?.activeIndex;
  }

  swiperSlideChanged(ev: any) {
    console.log(ev);
    this.step = ev.activeIndex;
  }
  proceed() {
    this.router.navigate(['/home']);
  }

  prev() {
    this.swiper?.slidePrev(300);
    this.step = this.swiper?.activeIndex;
  }

  next() {
    this.swiper?.slideNext(300);
    this.step = this.swiper?.activeIndex;
  }
}
