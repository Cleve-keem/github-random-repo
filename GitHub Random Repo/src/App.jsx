import PlayButton from "./Components/PlayButton"
import UploadButton from "./Components/UploadButton"

function App() {
  return(
    <div onClick={() => alert ("this div is clicked") }>
      <button onClick={() => alert('Playing!')}>
        Play Movie!
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image!
      </button>

      <PlayButton movieName="Venom" />
      <UploadButton movieName="Venom" />

    </div>
  )
}

export default App
