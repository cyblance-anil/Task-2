function resizefunction(){
    WiHi = jQuery('.ClientsSlideOuter').innerWidth();
    jQuery('#ClientsSlide').css('width',WiHi+'px');
}
jQuery(function($){
    resizefunction();
    jQuery('#ClientsSlide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 1,
    });
    jQuery( window ).resize(function() {
        resizefunction();
    });
});
function navScroll(navId){
    var HeaderHi = $('#header').innerHeight();
    jQuery('html, body').animate({
        scrollTop: jQuery(navId).offset().top }, 'slow');
}
function initMap() {
    var position = {lat: 51.524419, lng: -0.073380};
    var map = new google.maps.Map(document.getElementById('map'), {

    center: position,
    zoom: 12,
    styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
    });
    var contentString = '<div id="MapContent">'+
    '<p>Geek Label<br>'+
    '4th Floor<br>'+
    '27 - 33 Bethnal Green Road<br>'+
    'Shoreditch<br>'+
    'London<br>'+
    'E1 6LA</p>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
        //pixelOffset: new google.maps.Size(170,110)
    });

    var marker = new google.maps.Marker({
      position: position,
      icon: 'images/map-pin.png',
      map: map,
    });
    infowindow.open(map, marker);
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
}