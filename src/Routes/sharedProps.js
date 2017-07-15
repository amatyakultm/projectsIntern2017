import Table from '../components/PresentAbsent/Table'
let eiei
const SharedProps = (props) => {
    eiei = props
    Table.props
}

const getSharedProps = () => {
    return eiei
}
export default {
    SharedProps,
    getSharedProps
}