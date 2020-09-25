import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';
import { read } from 'fs';
const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";

  constructor() { }

  public async addNewToGallery(){
    //Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    //save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    });
  }

  private async savePicture(cameraPhoto: CameraPhoto){
    //convert photo to base64
    const base64Data = await this.readAsBase64(cameraPhoto);

    //write to data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });

    //use webpath to display new image instead of base64
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    };
  }

  private async readAsBase64(CameraPhoto: CameraPhoto){
    //fetch photo, read as blob, then convert to base64
    const response = await fetch(CameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  })

  public async loadSaved() {
    //retrieve cached photo array data
    const photos = await Storage.get({key: this.PHOTO_STORAGE});
    this.photos = JSON.parse(photos.value) || [];

    //display the photo by reading base64
    for (let photo of this.photos){
      //read each saved photo's data from the filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });

      //web only: load the photo as base64
      photo.webviewPath = 'data:image/jpeg;base64,${readFile.data}';
    }
  }

}

interface Photo {
  filepath: string;
  webviewPath: string;
}
