import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoTrashOutline } from "react-icons/io5";

export default function TableCart() {
    
    // ---------------------------- Redux
    const dispatch = useDispatch();
    const compras = useSelector((state) => state.carrinho);
    function handleRemove(id) {
      dispatch({
        type: "REMOVE_BUY",
        id,
      });
    }
  
  return (
    <div>
      <table className="table table-hover text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">categoria</th>
            <th scope="col">Descrição</th>
            <th scope="col">R$ Unidade</th>
            <th scope="col">Quant.</th>
            <th scope="col">R$ Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {compras.map((buy) => (
            <tr key={buy.id}>
              <th scope="row">
                <img src={buy.imagem} alt="" height="100px" />
              </th>
              <td>{buy.categoria}</td>
              <td>{buy.descricao}</td>
              <td>{buy.precofinal}</td>
              <td>{buy.amount}</td>
              <td>{buy.precofinal * buy.amount}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemove(buy.id)}
                  style={{ background: "transparent", border: "none" }}
                >
                  <div>
                    <IoTrashOutline size={16} color="#FFF" />
                  </div>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
