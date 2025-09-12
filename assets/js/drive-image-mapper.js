(function(){
  var imageIdByPath = window.DRIVE_IMAGE_MAP || {
    // 'assets/images/home/Bridges.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/home/Marine.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/home/Highways.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/home/Tunnels.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/home/about.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/home/1.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/home/2.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/home/3.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/home/4.png': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/About/about-main.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/About/1.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/About/2.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/About/3.webp': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/About/4.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/Application/Main.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/Application/1.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/Application/2.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/Application/water.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/Products/main.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/Products/1.jpg': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/facebook.png': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/instagram.png': 'YOUR_DRIVE_FILE_ID_HERE',
    // 'assets/images/twitter.jpg': 'YOUR_DRIVE_FILE_ID_HERE'
  };

  function normalizePath(p){
    if(!p) return '';
    var s = p.trim();
    if(s.startsWith('./')) s = s.slice(2);
    if(s.startsWith('/')) s = s.slice(1);
    return s.replace(/\\/g,'/');
  }

  function toDriveUrl(id){
    return 'https://drive.google.com/thumbnail?id=' + encodeURIComponent(id);
  }

  function remapImages(){
    var imgs = document.getElementsByTagName('img');
    for(var i=0;i<imgs.length;i++){
      var img = imgs[i];
      var original = img.getAttribute('src');
      if(!original) continue;
      var norm = normalizePath(original);
      var id = imageIdByPath[norm] || imageIdByPath[normalizePath('./'+norm)];
      if(id){
        img.setAttribute('src', toDriveUrl(id));
      }
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', remapImages);
  } else {
    remapImages();
  }
})(); 