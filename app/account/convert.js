function onChange() {
    /*reader.readAsText(file);*/
    function EL(id) {
        return document.getElementById(id);
    } // Get el by ID helper function
    
    var FR= new FileReader();

    FR.onload = function(e) {
        EL("img").src = e.target.result;
        EL("b64").innerHTML = e.target.result;
        document.getElementById("demo").value = e.target.result;

        //provera eventa i filereader-a
        console.log(e.target.result);
        console.log("FR err: " + FR.error);
    };

    FR.readAsDataURL(document.getElementById('inp').files[0]);

    //provera da li postoji file u inputu u account/index/html
    console.log(document.getElementById('inp').files[0]);
}
