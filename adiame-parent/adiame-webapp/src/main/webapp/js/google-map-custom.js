
		"use strict";

		// variable to hold a map
		var map;
		
		// variable to hold current active InfoWindow
		var activeInfoWindow ;		


		// ------------------------------------------------------------------------------- //
		// initialize function		
		// ------------------------------------------------------------------------------- //
		  function initialize() {
			
			// map options - lots of options available here 
			var mapOptions = {
			  zoom : 11,
			  draggable: true,
			  center : new google.maps.LatLng(44.9600, -93.1000),
			  mapTypeId : google.maps.MapTypeId.ROADMAP,
			  scrollwheel: false,
		    navigationControl: false,
		    mapTypeControl: false,
		    scaleControl: false,
		     styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#A6A6A0"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
			};
			
			// create map in div called map-canvas using map options defined above
			map = new google.maps.Map(document.getElementById('ds-map'), mapOptions);
		
			// define three Google Map LatLng objects representing geographic points
			var stPaul 			= new google.maps.LatLng(44.95273,-93.08915);
			var minneapolis 	= new google.maps.LatLng(45.97994,-93.26630);
			var falconHeights 	= new google.maps.LatLng(44.9917,-93.1664);

			// place markers
			fnPlaceMarkers(stPaul,"Location One");	
			fnPlaceMarkers(minneapolis,"Location Two");	
			fnPlaceMarkers(falconHeights,"Location Three");	
		  }

		// ------------------------------------------------------------------------------- //
		// create markers on the map
		// ------------------------------------------------------------------------------- //
		function fnPlaceMarkers(myLocation,myCityName){
			var icon1 = "images/map-marker-hover.png";
			var icon2 = "images/map-marker.png";

			var marker = new google.maps.Marker({
				position : myLocation,
				map: map,
  			icon: icon1
			});

			google.maps.event.addListener(marker, 'mouseover', function() {
			    marker.setIcon(icon2);
			});
			google.maps.event.addListener(marker, 'mouseout', function() {
			    marker.setIcon(icon1);
			});
		
			// Renders the marker on the specified map
			marker.setMap(map);	

			// create an InfoWindow - for mouseover
			var infoWnd = new google.maps.InfoWindow();						

			// create an InfoWindow -  for mouseclick
			var infoWnd2 = new google.maps.InfoWindow();
			
			// -----------------------
			// ON MOUSEOVER
			// -----------------------
			
			// add content to your InfoWindow
			infoWnd.setContent('<div class="map-detail-box">'+ '<h5>' +  myCityName + '</h5><p>123 Any Street, Any City, ST 12345<br>Phone: 123 456-7890</p><p><a href="#">Email</a> | <a href="#">Get Direction</a></p></div>');
			
			// add listener on InfoWindow for mouseover event
			google.maps.event.addListener(marker, 'mouseover', function() {
				
				// Close active window if exists - [one might expect this to be default behaviour no?]				
				if(activeInfoWindow != null) activeInfoWindow.close();

				// Close info Window on mouseclick if already opened
				infoWnd2.close();
			
				// Open new InfoWindow for mouseover event
				infoWnd.open(map, marker);
				
				// Store new open InfoWindow in global variable
				activeInfoWindow = infoWnd;				
			}); 							
			
			// on mouseout (moved mouse off marker) make infoWindow disappear
			google.maps.event.addListener(marker, 'mouseout', function() {
				infoWnd.close();	
			});
			
			// --------------------------------
			// ON MARKER CLICK - (Mouse click)
			// --------------------------------
			
			// add content to InfoWindow for click event 
			infoWnd2.setContent('<div class="map-detail-box">' + '<h5>' +  myCityName + '</h5><p>123 Any Street, Any City, ST 12345<br>Phone: 123 456-7890</p><p><a href="#">Email</a> | <a href="#">Get Direction</a></p></div>');
			
			// add listener on InfoWindow for click event
			google.maps.event.addListener(marker, 'click', function() {
				
				//Close active window if exists - [one might expect this to be default behaviour no?]				
				if(activeInfoWindow != null) activeInfoWindow.close();

				// Open InfoWindow - on click 
				infoWnd2.open(map, marker);
				
				// Close "mouseover" infoWindow
				infoWnd.close();
				
				// Store new open InfoWindow in global variable
				activeInfoWindow = infoWnd2;
			}); 							
			
		}
		
		// ------------------------------------------------------------------------------- //
		// initial load
		// ------------------------------------------------------------------------------- //		
		google.maps.event.addDomListener(window, 'load', initialize);
	