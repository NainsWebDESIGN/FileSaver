import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-FileSaver',
  templateUrl: './FileSaver.component.html',
  styleUrls: ['./FileSaver.component.css']
})
export class FileSaverComponent implements OnInit {
  save = '';
  constructor(private http: HttpClient) { }
  SaveData() {
    let data: any = [];
    this.http.get('assets/DataBass.json').subscribe(json => {
      data = json;
      console.log(data);
      let text = { "name": "123456", "style": "987654" }
      data.Member[1].push(text)
      let content = new Blob([JSON.stringify(data)], { type: "text/plain;charset=utf-8" });
      saveAs(content, "save.json");
    });
  }
  ngOnInit() {
  }

}
