import React from 'react';
import { FaArrowDown, FaArrowUp, FaMoneyBillAlt } from 'react-icons/fa';
import Header from '../../components/Header';

import { Container, CardContainer, Card, TableContainer } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <FaArrowUp size={24} />
            </header>
            <h1 data-testid="balance-income">R$ 1.625,36</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <FaArrowDown size={24} />
            </header>
            <h1 data-testid="balance-outcome">R$ 475,00</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <FaMoneyBillAlt size={24} />
            </header>
            <h1 data-testid="balance-total">R$ 1.150,36</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <tbody>
              <tr>
                <td className="title">Entrada</td>
                <td className="income">R$ 1.000,00</td>
                <td>Entrada</td>
                <td>10/01/2020</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="title">Entrada</td>
                <td className="income">R$ 375,00</td>
                <td>Entrada</td>
                <td>10/01/2020</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="title">Saída</td>
                <td className="outcome">R$ 300,00</td>
                <td>Entrada</td>
                <td>10/01/2020</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="title">Saída</td>
                <td className="outcome">R$ 175,00</td>
                <td>Entrada</td>
                <td>10/01/2020</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="title">Entrada</td>
                <td className="income">R$ 250,36</td>
                <td>Entrada</td>
                <td>10/01/2020</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
