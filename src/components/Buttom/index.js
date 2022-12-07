
import {ButtonContainer} from './styles'

function Buttom({label, onClick}) {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}

export default Buttom;