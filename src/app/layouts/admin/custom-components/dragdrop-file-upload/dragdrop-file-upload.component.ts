import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-dragdrop-file-upload',
  templateUrl: './dragdrop-file-upload.component.html',
  styleUrls: ['./dragdrop-file-upload.component.scss']
})
export class DragdropFileUploadComponent implements OnInit {
  files: FileList[] = [];
  isHovered = false;

  constructor(
    private sharedService: SharedService
  ){}

  ngOnInit(): void {}

  onChange(e: any): void{
    this.files = e.target.files;
    this.isHovered = true;
  }

  filesDroppedHandler(fileList: any[]): void{
    this.files = fileList;
    this.isHovered = true;
  }

  filesHoveredHandler(isHovered: boolean): void{
    this.isHovered = isHovered;
  }

  uploadHandler(): void{
    this.sharedService.showMsg(`${this.files.length} File(s) has been uploaded`);

    this.files = [];
    this.isHovered = false;
  }

}
