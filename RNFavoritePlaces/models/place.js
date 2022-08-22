class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{lat: 0.343535, lng: 127.65}
    this.id = new Date().toString() + Math.random().toString();
  }
}
