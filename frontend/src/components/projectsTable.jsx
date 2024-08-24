function ProjectsTable() {
  return (
    <div className="table-responsive small employees-table">
      <h4>Project Details :</h4>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project</th>
            <th scope="col">Description</th>
            <th scope="col">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,001</td>
            <td>random</td>
            <td>data</td>
            <td>placeholder</td>
          </tr>
          <tr>
            <td>1,002</td>
            <td>placeholder</td>
            <td>irrelevant</td>
            <td>visual</td>
          </tr>
          <tr>
            <td>1,003</td>
            <td>data</td>
            <td>rich</td>
            <td>dashboard</td>
          </tr>
          <tr>
            <td>1,003</td>
            <td>information</td>
            <td>placeholder</td>
            <td>illustrative</td>
          </tr>
          <tr>
            <td>1,004</td>
            <td>text</td>
            <td>random</td>
            <td>layout</td>
          </tr>
          <tr>
            <td>1,005</td>
            <td>dashboard</td>
            <td>irrelevant</td>
            <td>text</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;
