
import BtnIzquierda from "./BtnIzquierda";
import { hacerClick, hacerClick2 } from "/src/categoriasR.js";

const temas = [
  { categoria: "Hábitos Saludables", items: ["Hábitos saludables", "Alimentación", "Ejercicio"] },
  { categoria: "Salud Mental", items: ["Salud mental", "Estrés", "Ansiedad"] },
  { categoria: "Higiene del Sueño", items: ["Higiene del sueño", "Insomnio", "Apnea del sueño"] },
];

const Botones = () => {
  return (
    <div className="container-fluid" style={{ marginLeft: "30px" , marginBottom: "60px", marginTop: "50px"}}>
      <div className="page-container ">
        <div className="row">
          <div className="col-md-1">
            <BtnIzquierda />
          </div>
          <div className="col text-start" style={{ marginLeft: "250px" }}>
            <p className="text-right fs-2 fw-bolder">Temas</p>
            {temas.map((tema, index) => (
              <div key={index}>
                <p className="fs-5 fw-semibold mt-5 ">{tema.categoria}</p>
                {tema.items.map((item, idx) => (
                  <div className="row" key={idx}>
                    <p className="fw-normal col mt-3">{item}</p>
                    <div className="col-md-4">
                      <a onClick={hacerClick} className="btn btn-outline-secondary m-3 text-center" href="#" role="button">Editar</a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div className="row mt-5" style={{ marginRight: "250px" }}>
              <div className="d-grid gap-2 col-4 mx-auto mt-5">
                <a onClick={hacerClick2} className="btn btn-outline-secondary m-2 text-center" href="#" role="button">Nuevo tema</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Botones;


