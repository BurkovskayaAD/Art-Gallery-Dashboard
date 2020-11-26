import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {EventEmitter} from 'events';
import { EventEmitter } from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {HttpEventType} from '@angular/common/http';
import {HttpServiceService} from '../../services/http-service.service';

@Component({
  selector: 'app-form-new-artist',
  templateUrl: './form-new-artist.component.html',
  styleUrls: ['./form-new-artist.component.scss']
})
export class FormNewArtistComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private fb: FormBuilder, private http: HttpServiceService) {
  }

  get nameError(): any {
    // console.log(this.addNewArtist.get('name').errors);
    return this.addNewArtist.get('name').errors;
  }

  addNewArtist = this.fb.group({
    name: ['', Validators.required],
    country: ['', Validators.required],
    dateBirth: ['', Validators.required],
    dateDeath: [''],
    photo: ['', Validators.required],
    occupation: ['', Validators.required]
  });

  @Output() addNewOutput = new EventEmitter();

  // afuConfig  = {
  //   formatAllowed : " .jpg, .png, .jpeg "  ,
  //   uploadAPI : {
  //     url : " https: // example-file-upload-api "
  //   },
  //   hideResetBtn: true,
  //   fileNameIndex : true,
  //   replaceTexts : {
  //     afterUploadMsg_success : 'Upload!' ,
  //     afterUploadMsg_error : 'Error' ,
  //     sizeLimit : ' '
  //   }
  // } ;

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.addNewOutput.emit(this.addNewArtist.value);
    console.log(this.addNewArtist.value);
  }

  onChange(event): void {
    this.fileToUpload = event.target.files[0];
    console.log(this.fileToUpload);
    //
    // const fd = new FormData();
    // fd.append('image', this.fileToUpload, this.fileToUpload.name);
    //
    // this.http.post('./api/test-api-for-upload', fd, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    //   .subscribe(event => {
    //     if (event.type = HttpEventType.UploadProgress) {
    //       console.log('Upload Progress: ', Math.round(event.loaded / event.total * 100) + '%');
    //     }
    //     if (event.type = HttpEventType.Response) {
    //       console.log(event);
    //     }
    //   });
  }

  // onChange($event: Event): void{
  //   const file = ($event.target as HTMLInputElement).files[0];
  //   console.log(file);
  //   this.convertToBase64(file);
  // }
  //
  // convertToBase64(file: File): void{
  //   const observable = new Observable((subscriber: Subscriber<any>) => {
  //     this.readFile(file, subscriber);
  //   });
  //   observable.subscribe(d => {
  //     const data = d;
  //     console.log(data);
  //     this.addNewArtist.patchValue({photo: data});
  //   });
  // }
  //
  // readFile(file: File, subscriber: Subscriber<any>): void{
  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(file);
  //
  //   fileReader.onload = () => {
  //     subscriber.next(fileReader.result);
  //     subscriber.complete();
  //   };
  //   fileReader.onerror = (error) => {
  //     subscriber.error(error);
  //     subscriber.complete();
  //   };
  // }
}
