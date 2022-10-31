import { NgModule } from '@angular/core';
import { DropZoneComponent } from './drop-zone.component';
import {FileUploadService} from './fileUpload.service';

@NgModule({
  declarations: [
    DropZoneComponent
  ],
  imports: [
  ],
  exports: [
    DropZoneComponent
  ],
  providers: [
    FileUploadService
  ]
})
export class DropZoneModule { }
