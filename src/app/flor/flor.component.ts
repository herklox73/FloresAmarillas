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
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  toggleEnvelope() {
    if (!this.isEnvelopeOpen) {
      this.isEnvelopeOpen = true;
      setTimeout(() => {
        this.isModalOpen = true;
        this.audioPlayer.nativeElement.play();
        this.videoPlayer.nativeElement.play(); // Reproducir el video al abrir el modal
      }, 500);
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.isEnvelopeOpen = false;
    this.audioPlayer.nativeElement.pause();
    this.audioPlayer.nativeElement.currentTime = 0;
    this.videoPlayer.nativeElement.pause(); // Pausar el video al cerrar el modal
    this.videoPlayer.nativeElement.currentTime = 0; // Reiniciar el video
  }
}
