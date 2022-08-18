import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-meeting-rooms',
  templateUrl: './meeting-rooms.component.html',
  styleUrls: ['./meeting-rooms.component.css']
})
export class MeetingRoomsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.minMeetingRooms([[0, 30], [5, 10], [15, 20]]);
  }

  /**
   * *Time: O(N log N)
   * *Space: O(N)
   */
  minMeetingRooms(intervals: any) {
    // @ts-ignore
    const starts = intervals.map(([start]) => start).sort((a, b) => a - b);
    console.log('starts: ', starts);
    // @ts-ignore
    const ends = intervals.map(([, end]) => end).sort((a, b) => a - b);
    console.log('ends: ', ends);
    let max = 0, i = 0, j = 0;
    while (i < intervals.length) {
      console.log([starts[i], ends[j]]);
      const [start, end] = [starts[i], ends[j]];
      if (start < end) {
        max++;
      } else {
        j++;
      }
      i++;
    }
    return max;
  }
}
