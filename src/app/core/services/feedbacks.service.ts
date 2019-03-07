import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  private feedbacks: string[] = [];

  addFeedback(feedback: string): void {
    const currentDate = new Date();
    this.feedbacks.unshift(`${feedback} at ${currentDate.toLocaleString()}`);
  }

  getFeedbacks(): Array<string> {
    return this.feedbacks;
  }
}
