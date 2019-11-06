

function loadImagesFirst() {

  loadImages("snow");

}

function loadImagesSecound() {
  loadImages("sun");
}

function hide() {
  var x = document.querySelector(".hideImg");
  document.body.classList.toggle("none")
}



function loadImages(searchQuery) {
  fetch("http://www.splashbase.co/api/v1/images/search?query=" + searchQuery, {
    /* headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "754e922385mshd4812ea71897f5bp1dd298jsnd9443513a1ec",
    } */
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (imagesResponse) {
      console.log(imagesResponse)

      var div = `
                    <h3>${searchQuery} </h3>
                    <hr/>
                     <div class='row' >
                 `;


      let images = imagesResponse.images;


      images.forEach(image => {
        div += `
           
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img  src="${image.url}" class="hideImg" width="348" height="225"/>
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hide() ">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">"${image.id}"</small>
                </div>
              </div>
            </div>
          </div>

          `;
      });

      document.querySelector("#images-api").innerHTML += div + "</div>"

    })
}

function loadImages(searchQuery) {
  fetch("http://www.splashbase.co/api/v1/images/search?query=" + searchQuery, {
    /* headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "754e922385mshd4812ea71897f5bp1dd298jsnd9443513a1ec",
    } */
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (imagesResponse) {
      console.log(imagesResponse)

      var div = `
                    <h3>${searchQuery} </h3>
                    <hr/>
                     <div class='row' >
                 `;


      let images = imagesResponse.images;


      images.forEach(image => {
        div += `
           
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="${image.url}" class="hideImg"  width="348" height="225"/>
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hide()">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">"${image.id}"</small>
                </div>
              </div>
            </div>
          </div>


              
         
          `;
      });

      document.querySelector("#images-api").innerHTML += div + "</div>"

    })
}


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

/*  <div class="col-sm-4 col-md-3 col-lg-2 song">
            <img src="${image.url}" />
        <span class="text-uppercase">${image.id}</span>
           </div>  */