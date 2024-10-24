import Button from "./Button";

export default function PlayButton({movieName}){
    const handlePlayButton = () =>{
        alert(`Playing ${movieName}`);
    }
    return (
        <Button action = {handlePlayButton}>
            Play "{movieName}"
        </Button>
    )
}