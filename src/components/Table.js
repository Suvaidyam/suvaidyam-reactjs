import Row from "./Row";
export default function Table(props) {
    console.log('Table[props]', props)
    return <table border='1'>
        <thead>
            <tr style={{ 'textAlign': 'center' }}>
                <th colspan='5'>
                    {props.title}
                </th>
            </tr>
        </thead>
        <tbody>
            {props.rows.map((row, index) => <Row key={'row' + index} columns={row.columns} />)}
        </tbody>
    </table>
}