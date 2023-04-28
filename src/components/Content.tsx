import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api/api";
import { LinkModel } from "../models/link.interface";
import { Utils } from "../utils/Utils";
import loadingImg from "./../assets/img/loading.gif";

interface Par {
  status: boolean;
  id: number;
  type: string | undefined;
}

const Content = ({ status, id, type }: Par) => {
  const api = new Api();
  const [loading, setLoading] = useState(false);
  const [distance, setDistance] = useState<number>(150);
  const [typeProject, setTypeProject] = useState<string>('Menú');
  const [link, setLink] = useState<LinkModel>({
    id: 1,
    approver: "",
    aprobed: 1,
    customer: "",
    customer_id: 1,
    message: "",
    urldropbox: "",
  });
  let navigate = useNavigate();
  const infoContent = useRef<any>();
  let utils = new Utils();

  useEffect(() => {
    status ? (link.aprobed = 1) : (link.aprobed = 2);
    setLink({ ...link, id: id });
    setType(type)
  }, [status]);

  const submit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoading(true);

    //return console.log(link);

    api.postData(id, link).then((result) => {
      //console.log(result);
      navigate("/prototipes/checklist/gracias");
    });
  };

  const setType = (typeURL: string | undefined) =>{
    if(!typeURL) return;

    setTypeProject(utils.capitalizeString(typeURL))
  }

  const setInfo = (
    evt:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    //console.log(evt.target.value, evt.target.name)
    //onClick={(evt) => submit(evt)}
    setLink({ ...link, [evt.target.name]: evt.target.value });
  };

  const handleClick = () => {
    if (infoContent.current) {
      infoContent.current.scroll({
        top: distance,
        left: 0,
        behavior: "smooth",
      });
      setDistance(distance + distance);
    }
  };

  return (
    <div>
      <h2>{status ? "Aprobado" : "Deseo cambios"}</h2>
      <form onSubmit={(evt) => submit(evt)}>
        {status ? (
          <div>
            <div ref={infoContent} className="information">
              <p>
                Gracias por su preferencia, valoramos su negocio y por eso
                nuestra meta es proporcionar un {typeProject} único y de alta calidad.
                Sin embargo cada restaurante es único en su estilo y
                preferencias y los requerimientos gubernamentales varían de
                estado a esto por lo que:
              </p>
              <p>
                <span>Bliones</span> no se hace responsable de los
                requerimientos de la Secretaría de Salud en su {typeProject}.
              </p>
              <p>
                Lea y verifique con especial atención los textos, imágenes y
                orden de secciones en general, del {typeProject} adjunto al enlace;
              </p>
              <p>
                <span>Bliones</span> no se hace responsable de errores u
                omisiones que se hayan hecho en este arte y se hayan aprobado
                por usted. Recuerde que al colocar su nombre y dar click al
                botón de “Aprobar {typeProject}“ nos indica que está conforme con el
                diseño, textos, precios e imágenes del {typeProject} presentado por{" "}
                <span>Bliones</span>.
              </p>
              <p>
                Al enviar mi aprobado me hago responsable de que el diseño es
                tal y como lo pedí, no encontré ningún error al revisarlo y en
                dado caso de haber omitido alguno, me hago responsable de los
                costos y deslindo de toda responsabilidad a la empresa{" "}
                <span>Bliones</span>.
              </p>
            </div>
            <div className="button-information">
              <button
                type="button"
                className="rejected"
                onClick={() => handleClick()}
              >
                See More
              </button>
            </div>
            <div className="approver-div">
              <input
                required
                type="text"
                name="approver"
                placeholder="Nombre de la persona que aprueba"
                onChange={(evt) => setInfo(evt)}
              />
            </div>
          </div>
        ) : (
          <div>
            <p>
              Indiquenos que cambios le gustaría realizar en su menú. Por favor,
              sea lo más específico posible.
            </p>
            <div className="approver-div">
              <textarea
                required
                name="message"
                onChange={(evt) => setInfo(evt)}
              ></textarea>
              <label htmlFor="message">Observaciones</label>
            </div>
            <div className="approver-div">
              <input
                required
                type="text"
                name="approver"
                placeholder="Nombre de la persona que revisa"
                onChange={(evt) => setInfo(evt)}
              />
            </div>
          </div>
        )}
        <div className="button-container">
          {!loading ? (
            <button
              type="submit"
              value="submit"
              className={`button ${status ? "success" : "rejected"}`}
            >
              {status ? "Aprobar el menú" : "Enviar mis observaciones"}
            </button>
          ) : (
            <img src={loadingImg} className="loading" alt="Loading" />
          )}
        </div>
      </form>
    </div>
  );
};

export default Content;
