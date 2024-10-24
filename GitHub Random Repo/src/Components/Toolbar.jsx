import Button from "./Button";

export default function Toolbar({onPlayMovie, onUploadMovie}){
    return (
        <>
            <Button action={onPlayMovie}>
                Play Movie
            </Button>
            <Button action={onUploadMovie}>
                Upload Movie
            </Button>
        </>
    )
}