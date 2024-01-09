// src/components/LicenseTable.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/LicenseTable.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const LicenseTable = () => {
  const [data, setData] = useState([]);
  const [licenseStats, setLicenseStats] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Substitua 'sua-api/licencas' pela URL real da sua API
        const response = await axios.get("https://sua-api.com/licencas");
        setData(response.data);

        const stats = response.data.reduce((acc, license) => {
          acc[license.id] = {
            total: acc[license.id]?.total + 1 || 1,
            inUse:
              acc[license.id]?.inUse + (license.emUso ? 1 : 0) ||
              (license.emUso ? 1 : 0),
          };
          acc[license.id].available =
            acc[license.id].total - acc[license.id].inUse;
          return acc;
        }, {});

        setLicenseStats(stats);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <div className="header" style={{ backgroundColor: "#03588c" }}>
        <h1>CanGame Edu</h1>
      </div>
      <div className="table-container">
        <div className="table-wrapper">
          <h2>Controle de Licenças</h2>
          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Validade</th>
                <th>Total</th>
                <th>Em Uso</th>
                <th>Disponíveis</th>
              </tr>
            </thead>
            <tbody>
              {data.map((license) => (
                <tr key={license.id}>
                  <td>{license.id}</td>
                  <td>{license.name}</td>
                  <td>{license.type}</td>
                  <td>{license.validade}</td>
                  <td>{licenseStats[license.id]?.total || 0}</td>
                  <td>{licenseStats[license.id]?.inUse || 0}</td>
                  <td>{licenseStats[license.id]?.available || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="footer"
        style={{ backgroundColor: "#03588c", marginTop: "auto" }}
      >
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LicenseTable;
