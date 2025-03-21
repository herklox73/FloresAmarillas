import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-flor',
  imports: [CommonModule],
  templateUrl: './flor.component.html',
  styleUrl: './flor.component.css',
})
export class FlorComponent {
  isEnvelopeOpen: boolean = false;
  isModalOpen: boolean = false;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  toggleEnvelope() {
    if (!this.isEnvelopeOpen) {
      this.isEnvelopeOpen = true;
      setTimeout(() => {
        this.isModalOpen = true;
        this.audioPlayer.nativeElement.play();
      }, 500);
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.isEnvelopeOpen = false;
    this.audioPlayer.nativeElement.pause();
    this.audioPlayer.nativeElement.currentTime = 0;
  }
}
