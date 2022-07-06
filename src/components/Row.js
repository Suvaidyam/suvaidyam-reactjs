import Column from "./Column";
export default function Row(props) {
    console.log('Rows[props]', props);
    return <tr>
        {props.columns.map((el, index) => <Column key={'row' + index} value={'Col' + el} />)}
    </tr>
}