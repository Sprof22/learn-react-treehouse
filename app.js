const title = 'My first React Element';
const desc = 'I just learnt how to render my first React Element';
const myTitleId = 'hello-world'
const header = (
<header>
    <h1 id = {myTitleId}>{title}</h1>
    <p>{desc}</p>;
</header>
)

ReactDOM.render(
    header,
    document.getElementById('root')
);