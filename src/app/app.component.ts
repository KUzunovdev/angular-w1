import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  items =  [ 
    { title: "Информация за вас", description: "Име: Кирил Узунов Години: 20 " , expanded: false},
    { title: "Хобита и интереси", description: "Пътуване, разходки, фитнес, нарга , бизнес и личностно развитие, крипто , инвестиции ", expanded: false},
    { title: "Link към канал на любим контент криейтър ", description: "https://www.youtube.com/@Georgi_Shishkov | https://www.youtube.com/@kristiankirilov1355", expanded: false},
    { title: "Информация за вашия канал", description: " Уча хората да бъдат финансово независими и да правят по 1милион на ден с крипто трейдване на миим коинс ", expanded: false},
    { title: "Пример за оствойностяване", description: " Давам много полезна информация нова за българската аудитория  ", expanded: false},

  ];

    toggle(item : any) {
      this.items.forEach(i => {
        if(i !== item) i.expanded = false;
    });
      item.expanded = !item.expanded;
    }

}


