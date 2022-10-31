import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileUploadService} from './fileUpload.service';

@Component({
  selector: 'drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss']
})
export class DropZoneComponent {
  @Input() identifier: string = null!;
  @Input() disabled: boolean = false;
  @Output() filesAdded = new EventEmitter<string>();

  constructor(private uploadService: FileUploadService) {
  }

  openFileDialog(e: MouseEvent) {
    e.preventDefault();
    if (this.disabled) {
      return;
    }
    document!.getElementById(this.getOpenDialog())!.click();
  }

  onFilesAdded(e: EventTarget) {
    if (this.disabled) {
      return;
    }
    const file = <File>((<HTMLInputElement>e).files![0]);
    this.uploadService.uploadFile(file).subscribe({
      next: _ => this.filesAdded.emit(file.name!),
      error: err => console.error(err),
      complete: () => console.log('complete')
    });
  }

  getOpenDialog() {
    return this.identifier;
  }
}
