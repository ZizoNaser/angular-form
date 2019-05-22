
export class StorageService {

  private data = {};
  
  save(data:any){
    this.data = data;
  }

  get load() {
    return this.data;
  }

}
