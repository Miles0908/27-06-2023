import "./index.css";
import { useState } from "react";

const Contacts = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log({nameInput , surnameInput , emailInput});
   
    
  };

  const onHandleNameInput = (e) => setNameInput(e.target.value);
  const onHandleSurnameInput = (e) => setSurnameInput(e.target.value);
  const onHandleEmailInput = (e) => setEmailInput(e.target.value);

  return (
    <form className="Contacts" onSubmit={onHandleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Inserisci il tuo nome"
        name="name"
        value={nameInput}
        onChange={onHandleNameInput}
      />
      <label htmlFor="surname">Cognome</label>
      <input
        type="text"
        placeholder="Inserisci il tuo Cognome"
        name="surname"
        value={surnameInput}
        onChange={onHandleSurnameInput}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="Inserisci la tua Email"
        name="email"
        value={emailInput}
        onChange={onHandleEmailInput}
      />
      <input type="submit" value="Invia" />
    </form>
  );
};
export default Contacts;
