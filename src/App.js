import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: 'ert',
            label : 'Can I use React?',
            content : 'You can you anything'
        },
        {
            id: "sdfgsd",
            label : 'Can I use Javascript?',
            content : 'You can you anything'
        },
        {
            id: 'wefre',
            label : 'Can I use CSS?',
            content : 'You can you anything'
        },
    ];

    return (
        <Accordion items={items}/>
    )
}

export default App;