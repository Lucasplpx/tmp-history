import Table from '..';

function TableItem() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Curso</th>
          <th>Módulo</th>
          <th>Aula</th>
          <th>Completo</th>
          <th>Visto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Starter</td>
          <td>
            <div>Ambiente de dev de outro mundo</div>
          </td>
          <td>
            <div>[Linux] Instalando VSCode</div>
          </td>
          <td>
            <label data-status="ERROR">não</label>
          </td>
          <td>há aproximadamente 2 horas</td>
        </tr>

        <tr>
          <td>Starter</td>
          <td>
            <div>O guia estelar de programação</div>
          </td>
          <td>
            <div>Como funciona a Web?</div>
          </td>
          <td>
            <label data-status="SUCCESS">sim</label>
          </td>
          <td>há 24 dias</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableItem;
