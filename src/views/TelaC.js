import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
    const route = props.route;
    const numero = 0//route && route.params & route.params.numero ? route.params.numero : 0
return (
    <TextoCentral corFundo="#9932cd">
        Tela C - {numero}
    </TextoCentral>
)
}