<button id="install">
  Instala esta aplicación en tu dispositivo
</button>
 
<script>
(function(){
  function install(ev) {
    ev.preventDefault();
    // define the manifest URL
    var manifest_url = "http://www.alergant.es/manifest.webapp";
    // install the app
    var myapp = navigator.mozApps.install(manifest_url);
    myapp.onsuccess = function(data) {
      // App is installed, remove button
      this.parentNode.removeChild(this);
    };
    myapp.onerror = function() {
      // App wasn't installed, info is in this.error.name
      console.log('Install failed, error: ' + this.error.name);
     };
  };
  // get a reference to the button and call install() on click
  var button = document.getElementById('install');
  button.addEventListener('click', install, false);
})();
</script>
