import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss']
})
export class UploadImgComponent implements OnInit {
  isVisible: boolean = false;
  file: File;
  imageUrl: string;
  fileName: string;

  constructor() { }

  ngOnInit(): void {
  }

  chooseFile() {
    document.getElementById('default-btn').click();
  }

  onFileSelected(event) {
    const imgElement = document.querySelector('.img-upload') as HTMLImageElement;
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result.toString();
        this.file = file;
      };
      reader.readAsDataURL(file);
      this.fileName = file.name;
      this.isVisible = true;
    }
  }

  cancelFile() {
    this.imageUrl = '';
    this.file = null;
    this.fileName = '';
    this.isVisible = false;
  }

}
