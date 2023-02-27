//user information ip, name, address, ISP etc 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>


$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
  // send all user information to localstorage name user-info
  localStorage.setItem("User-Info", JSON.stringify(data));
});