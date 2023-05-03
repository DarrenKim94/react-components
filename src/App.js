import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button danger outline>Click Me</Button>
            </div>
            <div>
                <Button success rounded>Dont Click me</Button>
            </div>
            <div>
                <Button warning outline>huy</Button>
            </div>
            <div>
                <Button primary rounded>Bro</Button>
            </div>
            <div>
                <Button secondary>Dang</Button>
            </div>
        </div>
    )
    
}

export default App;