

const clienteReducer = (clientes, action) => {
    switch (action.type) {
        case 'add':
            return addCliente(clientes, action.cliente)
        default:
            break;
    }
}

function addCliente(clientes, cliente) {
    return [
        ...clientes,
        {
            ...cliente,
        },
    ];
}

export default clienteReducer;
