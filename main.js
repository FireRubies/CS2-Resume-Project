function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

//document.cookie = "username=John Doe";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  console.log(cname + "=" + cvalue + ";" + expires + ";path=/");
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function set_mode(mode) {
  stylesheet = "stylesheets/" + mode + ".css"
  console.log('Swapping to: ', stylesheet);
  swapStyleSheet(stylesheet);
}

function checkCookie() {
  let mode = getCookie("mode");
  if (mode != "" && mode != null) {
   console.log("Cookie already set. Setting mode.")
   set_mode(mode)
  } else {
    if (mode == "" || mode == null) {
      console.log("set cookie")
      setCookie("mode", 'light_mode', 365);
      set_mode('light_mode')
    }
  }
}

function switch_mode() {
  if (getCookie('mode') == 'light_mode') {
    setCookie('mode', 'dark_mode');
    set_mode('dark_mode');
  } else {
    setCookie('mode', 'light_mode');
    set_mode('light_mode');
  }
}
