import React, { useEffect, useState } from "react";
import File from "./File";
import './../assets/styles/form.css';
import './../assets/styles/modal.css';
import Modal from 'react-modal';
import Content from "./Content";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../api/api";
import { LinkModel } from "../models/link.interface";
import { Utils } from "../utils/Utils";

const Form = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [typeProject, setTypeProject] = useState<string>('Menú');
  const [link, setLink] = useState<LinkModel>({
    id: 1,
    approver: '',
    aprobed: 1,
    customer: '',
    customer_id: 1,
    message: '',
    urldropbox: ''
  })
  let { type , id } = useParams();
  let api = new Api();
  let navigate = useNavigate();
  let utils = new Utils();

  useEffect(() => {

    if(!id) return;

    api.getData(id).then(data => {
      if (data.code !== 200) return console.error('Data error');
      
      if(data.user.aprobed !== 0) return navigate('/prototipes/checklist/gracias');

      setLink(data.user)
      
    });
    
    setType(type);

  }, [id])
  //console.log(link)

  const setType = (typeURL: string | undefined) =>{
    if(!typeURL) return;

    //set type with string "type" capitalized
    //setTypeProject(typeURL.replace(/\b\w/g, l => l.toUpperCase()))
    setTypeProject(utils.capitalizeString(typeURL))
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  const launchModal = (param: boolean) => {
    openModal();
    setAccepted(param);
  }


  return (
    <div className="form-container">
      <File  customer={link.customer} enlace={link.urldropbox} />
      <div className="information">
        <div className="buttons">
          <button onClick={() => launchModal(true)} className="success">Aprobar {typeProject}</button>
          <button onClick={() => launchModal(false)} className="rejected">Deseo cambios</button>
        </div>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
        className="modal"
      >
        <button className="close" onClick={() => closeModal()}>&#10006; </button>
        <Content status={accepted} id={link.id} type={type}/>
      </Modal>
      </div>
    </div>
  );
};

export default Form;
