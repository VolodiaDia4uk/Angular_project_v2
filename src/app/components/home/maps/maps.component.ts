/// <reference path='../../../../../node_modules/@types/googlemaps/index.d.ts'>
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {FormControl} from '@angular/forms';

declare let google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, AfterViewInit  {
  @ViewChild('gmap') gmap: any;
  @ViewChild('input') input: any;
  map: google.maps.Map;
  public search = new FormControl('');
  currentLat: any;
  currentLong: any;
  marker: google.maps.Marker;
  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmap.nativeElement, mapProp);
  }
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position.coords);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  ngAfterViewInit() {
    this.autocompleteForm();
  }
  showPosition(position) {
    this.currentLat = position.latitude;
    this.currentLong = position.longitude;

    const location = new google.maps.LatLng(position.latitude, position.longitude);
    this.map.panTo(location);
    this.marker && this.marker.setMap(null);
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });

  }
  autocompleteForm() {
    const searchBox = new google.maps.places.Autocomplete(this.input.nativeElement,
      {
        componentRestrictions: { country: 'UA' },
        types: ['geocode']
      });
    google.maps.event.addListener(searchBox, 'place_changed', () => {
      this.showPosition({
        latitude: searchBox.getPlace().geometry.location.lat(),
        longitude: searchBox.getPlace().geometry.location.lng(),
    });
    });
  }
}
