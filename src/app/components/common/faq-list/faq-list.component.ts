import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Faq } from 'src/app/models/faq.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {
  isDarkTheme: boolean = this.themeSwitchService.getTheme();
  faqList$: Observable<any> | undefined;
  faqs: Faq[] = [];

  constructor(private themeSwitchService: ThemeSwitchService, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.initializeFaqList();
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  initializeFaqList(): void {
    this.faqList$ = this.contentfulService.getEntries('faqList');
    this.faqList$?.subscribe((faqList: any) => {
      faqList.items[0].fields.faqItems.forEach((item: any) => {
        this.faqs.push(new Faq(item.fields.question, item.fields.answer));
      });
      this.faqs[0].isOpen = true;
    });
  }

  toggleOpen(index: number): void {
    for (let i = 0; i < this.faqs.length; i++) {
      if (i !== index) { this.faqs[i].isOpen = false; }
    }
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
