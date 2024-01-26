console.log("spotify clone");

async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/song/")
    let response= await a.text()

    let div = document.createElement("div")
    div.innerHTML=response
    let as = div.getElementsByTagName("a")
  
    let songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith("mp3")) {
            songs.push(element.href)
        }
    }
  return songs
    
}

async function main() {
    let song =  await getsongs()
    console.log(song);
    var audio = new Audio(song[]);
      audio.play()
    
     
audio.addEventListener("loadeddata", () => {
  let duration = audio.duration;
  console.log(duration);
  
  // The duration variable now holds the duration (in seconds) of the audio clip
});
}
main()