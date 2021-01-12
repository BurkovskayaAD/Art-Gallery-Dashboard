import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {HttpServiceService} from '../../services/http-service.service';
import {Observable, Subscriber} from 'rxjs';

@Component({
  selector: 'app-form-new-artist',
  templateUrl: './form-new-artist.component.html',
  styleUrls: ['./form-new-artist.component.scss']
})
export class FormNewArtistComponent implements OnInit {

  // fileToUpload: File = null;
  fileToUpload: File;
  nameFile: any;

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
  @Output() addNewOutputImg = new EventEmitter();


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

  onSubmit(): void {
    // const formData = new FormData();
    // formData.append('file', this.fileToUpload);
    // formData.append('name', 'hello');
    // this.addNewOutput.emit(formData);
    // console.log(this.addNewArtist);

    // this.addNewOutput.emit(this.addNewArtist.value);
    // console.log(this.addNewArtist.value);

    // const formData = new FormData();
    // formData.append('name', this.addNewArtist.value.name);
    // formData.append('country', this.addNewArtist.value.country);
    // formData.append('dateBirth', this.addNewArtist.value.dateBirth);
    // formData.append('dateDeath', this.addNewArtist.value.dateDeath);
    // formData.append('occupation', this.addNewArtist.value.occupation);
    // formData.append('photo', this.fileToUpload);
    // this.addNewOutput.emit(formData);
    // console.log(formData);

    // const fd = new FormData();
    // fd.append('image', this.fileToUpload, this.fileToUpload.name);
    // this.addNewOutput.emit(fd);
    // console.log(fd);
    // console.log(fd.values());


    this.addNewArtist.value.photo = this.nameFile;
    console.log(this.addNewArtist.value);
    this.addNewOutput.emit(this.addNewArtist.value);
  }

  onChange(event): void {
    this.fileToUpload = event.target.files[0];
    this.nameFile = this.fileToUpload.name;
    console.log(this.nameFile);
  }

  onChangeUpload($event: Event): void{
    const file = ($event.target as HTMLInputElement).files[0];
    console.log(file);
    this.convertToBase64(file);
  }

  convertToBase64(file: File): void{
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe(d => {
      const data = d;
      console.log(data);
      this.addNewOutputImg.emit(data);
    });
  }

  readFile(file: File, subscriber: Subscriber<any>): void{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    };
    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
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
