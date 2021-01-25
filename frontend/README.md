npx creat-react-app frontend

npm install react-router@next react-router-dom@next

npm install bootstrap

npm install reactstrap

Criar as pages e as rotas













************* car ********************************

 const [imputFrutas, setInputFrutas] = React.useState("");
    const [imputTitulo, setInputTitulo] = React.useState("");

    // Redux
    const frutas = useSelector((state) => state.frutasReducer.frutas);
    const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
    // const arrayFrutas = frutas.frutas

    const dispatch = useDispatch();

    function adicionarFrutas(event) {
        event.preventDefault();

        const objFruta = {
            nome: inputFrutas
        }
        dispatch({ type: "ADICIONAR", value: objFruta})        
    }

    function alterarTitulo(event) {
        setInputFrutas(event.target.value);
        dispatch({type: "ALTERAR", value: event.target.value});
    }
******************************************Reducers ********************************
import { combineReducers } from 'redux';

const initialState = {
    frutas: [],
}

function frutasReducer(state = initialState, action) {

    if (action.type === 'ADICIONAR') {
        return { frutas: [...state.frutas, { ...action.value }]};
    } else {
        return state;
    }
}

function tituloReducer(state = { titulo: "Frutas" }, action) {
    if (action.type: === "ALTERAR") {
        return { titulo: action.value };
    } else {
        return state;
    }
}

const reducers = {combineReducers({ frutasReducer, tituloReducer })};

export default reducers;

**********************************************************



