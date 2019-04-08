import { Component, OnInit } from '@angular/core';
import { FeedbacksService } from '../../../core/services/feedbacks.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback = '';
  id: number;

  constructor(
    public feedbacksService: FeedbacksService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.pathFromRoot[0].snapshot.firstChild.paramMap.get('productID');
  }

  onSend() {
    if (this.feedback) {
      this.feedbacksService.addFeedback(this.id, this.feedback);
      this.feedback = '';
    }
  }

}
