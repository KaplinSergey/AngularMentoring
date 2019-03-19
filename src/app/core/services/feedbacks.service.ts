import { Injectable } from '@angular/core';
import { FeedbackModel } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  private feedbackRepo: FeedbackModel[] = [];

  addFeedback(id: number, feedback: string): void {
    const currentDate = new Date();
    const item = this.feedbackRepo.find((e) => e.id === id);

    if (!item) {
      this.feedbackRepo.push(new FeedbackModel(id, [`${feedback} at ${currentDate.toLocaleString()}`]));
    } else {
      item.feedbacks.unshift(`${feedback} at ${currentDate.toLocaleString()}`);
    }
  }

  getFeedbacks(id: number): Array<string> {
    const item = this.feedbackRepo.find((e) => e.id === id);
    return item ? this.feedbackRepo.find((e) => e.id === id).feedbacks : [];
  }
}
