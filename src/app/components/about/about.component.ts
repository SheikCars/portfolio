import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

stats = [
  { id: 'clients', label: 'Clients', value: 0, target: 2, speed: 500 },
  { id: 'projects', label: 'Projects', value: 0, target: 4, speed: 500 }, 
  { id: 'support', label: 'Hours Of Support', value: 1000, target: 3928, speed: 0.5 },
  { id: 'workers', label: 'Workers', value: 0, target: 96, speed: 30 }
];

  animated = false;

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const section = document.getElementById('counters');
    if (section && !this.animated) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        this.animated = true;
        this.animateCounters();
      }
    }
  }

animateCounters(): void {
  this.stats.forEach((item) => {
    const interval = setInterval(() => {
      if (item.value < item.target) {
        item.value++;
      } else {
        clearInterval(interval);
      }
    }, item.speed); // custom speed
  });
}

  
goToCurrentLocation(event: Event): void {
  event.preventDefault();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const mapsUrl = `https://www.google.com/maps?q=10.792187,78.978429`;
        window.open(mapsUrl, '_blank');
      },
      (error) => {
        alert('Location access denied or unavailable.');
        console.error(error);
      }
    );
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

}
