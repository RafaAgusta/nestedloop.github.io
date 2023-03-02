let ulang = confirm("Apakah Anda Ingin Mengulang?");
let counter = 0;

while(ulang){
  counter++;
  ulang = confirm("Apakah Anda Ingin Mengulang?");
  let bintang = "*".repeat(counter) + "<br/>"
  document.write(counter + " " + bintang);
}
