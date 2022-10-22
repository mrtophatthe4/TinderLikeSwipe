
var images = new Array("images/jpeg/lady.jpg","images/jpeg/glasses.jpg","images/jpeg/blueorange.jpg","images/jpeg/legoheads.jpg","images/jpeg/sky.jpg","images/jpeg/alexander-grey-NkQD-RHhbvY-unsplash.jpg","images/jpeg/annie-spratt-d3d_aHFPVPM-unsplash.jpg","images/jpeg/annie-spratt-fbAnIjhrOL4-unsplash.jpg","images/jpeg/bekir-donmez-eofm5R5f9Kw-unsplash.jpg","images/jpeg/katie-moum-iRMUDX0kyOc-unsplash.jpg","images/jpeg/chris-lawton-5IHz5WhosQE-unsplash.jpg","images/jpeg/ferhat-deniz-fors-ugOgx_MJ_T0-unsplash.jpg","images/jpeg/florian-klauer-nptLmg6jqDo-unsplash.jpg","images/jpeg/girl-with-red-hat-pwBlatTLAMA-unsplash.jpg","images/jpeg/ian-dooley-hpTH5b6mo2s-unsplash.jpg","images/jpeg/james-besser-vwe36fdsCJI-unsplash.jpg","images/jpeg/jonas-jacobsson-RT0_pCTjBP4-unsplash.jpg","images/jpeg/katie-moum-iRMUDX0kyOc-unsplash.jpg","images/jpeg/luca-bravo-3Z70SDuYs5g-unsplash.jpg","images/jpeg/luna-rico-UbN0sWbROuE-unsplash.jpg","images/jpeg/magnus-ostberg-AKLmn_MSAbA-unsplash.jpg","images/jpeg/noah-boyer-U4tUQ6-bRoo-unsplash.jpg","images/jpeg/richard-lee-FixxdTqC8zg-unsplash.jpg");
var accepts = 0
var rejects = 0
function reject(){
    rejects = rejects + 1
    swipe()
}
function swipe(){
    var randomNum = Math.floor(Math.random() * images.length);
    var image = document.getElementById("slide-image");
    var rejectamt = document.getElementById("rejectamt");
    var acceptamt = document.getElementById("acceptamt");
    var description = document.getElementById("desc");
    image.src = images[randomNum];
    console.log(images[randomNum]);
    rejectamt.innerHTML = rejects;
    acceptamt.innerHTML = accepts;
    description.innerHTML = images[randomNum]
}
function accept(){
    accepts = accepts + 1
    swipe()
}