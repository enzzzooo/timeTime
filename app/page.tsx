import Button from "./Button";
export default function page(){
    return (
    <div className="flex flex-col items-center [&>*:first-child]:mb-10 mt-2.5 text-black">
        <h1 className="text-xl">Here is my Time Button, click it!</h1>
        <Button />
    </div>)
}