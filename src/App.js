import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            label : 'Can I use React?',
            content : 'You can you anything'
        },
        {
            label : 'Can I use Javascript?',
            content : 'You can you anything'
        },
        {
            label : 'Can I use CSS?',
            content : 'You can you anything'
        },
    ];

    return (
        <Accordion items={items}/>
    )
}

export default App;