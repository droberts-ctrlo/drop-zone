import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  @Input()
  endpoint: String = null!

  constructor(private http: HttpClient) {
  }

  uploadFile(file: File) {
    return this.uploadFileWithName(file, file.name);
  }

  uploadFileWithName(file: File, name: string) {
    const formData = new FormData();
    formData.append('file', file, name);
    return this.http.post(`${this.endpoint}/upload`, formData);
  }
}
