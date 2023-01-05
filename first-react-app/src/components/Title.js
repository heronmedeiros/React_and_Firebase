export default function Title({ title, subtitle }) {
    return(
        // <> -> fragment
        <>
            <h1 className="title">{ title }</h1>
            <br />
            <h2 className="subtitle">{ subtitle }</h2>
        </>
    )
}