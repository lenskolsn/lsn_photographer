function dongho() {
  const date = new Date();
  const gio = date.getHours();
  const phut = date.getMinutes();
  const giay = date.getSeconds();
  time = `${gio}:${phut < 10 ? "0" + phut : phut}:${
      giay < 10 ? "0" + giay : giay
    }`;
  var html = (document.querySelector(".hienthi").innerHTML =
    "Time: " + time);
}
setInterval(() => {
  dongho();
}, 1000);