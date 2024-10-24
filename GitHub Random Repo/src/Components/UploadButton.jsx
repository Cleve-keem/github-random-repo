import Button from "./Button"

export default function UploadButton({movieName}){
    function handleUploadButton(){
        alert(`Uploading ${movieName}`);
    }
    return (
        <Button action={handleUploadButton}>
            Uploading "{movieName}"
        </Button>
    )
}