// src/components/LicenseTable.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/LicenseTable.css";

const LicenseTable = () => {
  const [data, setData] = useState([]);
  const [totalLicenses, setTotalLicenses] = useState(0);
  const [licensesInUse, setLicensesInUse] = useState(0);
  const [licensesAvailable, setLicensesAvailable] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Substitua 'sua-api/licencas' pela URL real da sua API
        const response = await axios.get("https://sua-api.com/licencas");
        setData(response.data);

        // Calcular o número total de licenças
        setTotalLicenses(response.data.length);

        // Calcular o número de licenças em uso
        const inUseCount = response.data.filter(
          (license) => license.emUso
        ).length;
        setLicensesInUse(inUseCount);

        // Calcular o número de licenças disponíveis
        setLicensesAvailable(totalLicenses - inUseCount);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, [totalLicenses]);

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <h2>Controle de Licenças</h2>
        <p>Total de Licenças: {totalLicenses}</p>
        <p>Licenças em Uso: {licensesInUse}</p>
        <p>Licenças Disponíveis: {licensesAvailable}</p>
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Validade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((license) => (
              <tr key={license.id}>
                <td>{license.id}</td>
                <td>{license.name}</td>
                <td>{license.type}</td>
                <td>{license.validade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LicenseTable;
