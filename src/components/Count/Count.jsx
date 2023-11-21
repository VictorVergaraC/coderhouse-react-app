import Button from '../Buttons/Button';
import { useCount } from '../../hooks/useCount';

const Count = ({initial = 0, max}) => {

    const {count, increment, drecrement} = useCount(10)

    return (
        <>
            <Button name="-" action={drecrement} />
            <strong>{count}</strong>
            <Button name="+" action={increment} />
            {/* <Button name="Reset" action={reset} /> */}
        </>
    );
}

export default Count;
