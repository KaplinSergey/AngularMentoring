import { Component, OnInit } from '@angular/core';
import { FeedbacksService } from '../../../core/services/feedbacks.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback = '';
  id: number;

  constructor(
    public feedbacksService: FeedbacksService) { }

  ngOnInit() {
  }

  onSend() {
    if (this.feedback) {
      this.feedbacksService.addFeedback(this.feedback);
      this.feedback = '';
    }
  }

}
