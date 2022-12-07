
import {ButtonContainer} from './styles'

function Buttom({label, onclick}) {
    return (
        <ButtonContainer onclick={onclick}>
            {label}
        </ButtonContainer>
    );
}

export default Buttom;