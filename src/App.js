import './App.css';
import { useState } from 'react'

function App() {

  const [address, setAddress] = useState(null)

  function buscarEndereco(event) {
    const cep = event.target.value
    
    if(cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => setAddress({
          cep: cep,
          street: data.logradouro,
          district: data.bairro,
          city: data.localidade,
          uf: data.uf,
          ddd: data.ddd
        }))
      console.log(address)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Busca CEP</h1>
        <input onChange={buscarEndereco} />
        {address &&
          <>
            <h2>Resultado da busca</h2>
            <ul>
              <li>CEP: {address.cep}</li>
              <li>Street: {address.street}</li>
              <li>District: {address.district}</li>
              <li>City: {address.city}</li>
              <li>UF: {address.uf}</li>
              <li>DDD: {address.ddd}</li>
            </ul>
          </>
        }
      </header>
    </div>
  );
}

export default App;
