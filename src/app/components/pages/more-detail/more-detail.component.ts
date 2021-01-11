import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.scss']
})
export class MoreDetailComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer) { 
   
  }


  articles = [
    {
      id: '1',
      title: 'Lirem Ipsum Dolor Sit Amet Libera Sequitor',   
      content_summary: `Sed auctor, purus et elementum gravida, felis augue faucibus velit, nec aliquet leo tellus eget
      purus. Sed est metus, placerat at, commodo ut, ultrices cursus, mauris. Cum sociis natoque penatibus`,
      content: `<b>A View From Space</b><BR>
      <img class="mr-3" src="assets/images/_thumb1.jpg" alt="A view of Earth from space." class="shadow p-3 mb-3 bg-white rounded first-img">
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      <img class="second-img" src="assets/images/_thumb1.jpg" alt="A view of Earth from space.">
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
      in faucibus.
    
      <BR><BR> It's easy to spot without any
      The International Space Station is one of the brightest objects in
      the night sky.
      The International Space Station is one of the brightest objects in
      the night sky.
      The International Space Station is one of the brightest objects in
      the night sky.
    
      The International Space Station is one of the brightest objects in
      the night sky.
      The International Space Station is one of the brightest objects in
      the night sky.
      The International Space Station is one of the brightest objects in
      the night sky.
      The International Space Station is one of the brightest objects in
      the night sky.
      special equipment.<BR clear="left">
      <b>Check out <a href=" http://spaceflight.nasa.gov/realdata/sightings/
           SSapplications/Post/SightingData/sighting_index.html" target="_blank">sighting opportunities</a> in your
        area!</b>`,
      image: 'assets/images/_thumb1.jpg',
      publishedOn: 'On April 20, 2009',
      postedBy: 'Kagame Geoffrey'
    }
  ]
  ngOnInit() {
  }

}
