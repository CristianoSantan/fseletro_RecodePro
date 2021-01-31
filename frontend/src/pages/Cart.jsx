import { useSelector, useDispatch } from "react-redux";

import { IoTrashOutline } from "react-icons/io5";
import "../assets/css/cart.css";
import astronaut6 from "../assets/img/astronauta6.png";

// import Requests from "../components/Requests";

export default function Cart() {
  const dispatch = useDispatch();
  const compras = useSelector((state) => state.carrinho);

  function handleRemove(id) {
    dispatch({
      type: "REMOVE_BUY",
      id,
    });
  }

  return (
    <>
      <div className="header">
        <div className="container">Carrinho</div>
      </div>
      <div className="section">
        <div className="car table-responsive p-5">
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
                <tr>
                  <th scope="row">{buy.id}</th>
                  <td>{buy.categoria}</td>
                  <td>{buy.descricao}</td>
                  <td>{buy.precofinal}</td>
                  <td>{buy.amount}</td>
                  <td>x</td>
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

          {/* <Requests /> */}

        </div>
      </div>
      <img className="astronaut6" src={astronaut6} alt="" />
    </>
  );
}
