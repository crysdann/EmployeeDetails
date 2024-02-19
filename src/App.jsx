const dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

class EmployeeSearch extends React.Component {
  render() {
    return (
      <div className="employee-search-container">
        <input
          type="text"
          placeholder="Search employee..."
          className="search-input"
        />
      </div>
    );
  }
}

function Employeerow(props) {
  const employee = props.employee;
  return (
    <tr>
      {/* <td>{employee.employeeid}</td> */}
      <td>{employee.firstname}</td>
      <td>{employee.lastname}</td>
      <td>{employee.age}</td>
      <td>
        {employee.dateofjoining instanceof Date
          ? employee.dateofjoining.toDateString()
          : ""}
      </td>
      <td>{employee.title}</td>
      <td>{employee.department}</td>
      <td>{employee.employeetype}</td>
      <td>{employee.currentstatus}</td>
    </tr>
  );
}

function EmployeeTable(props) {
  const employeeRows = props.employees.map((employee) => (
    <Employeerow key={employee.employeeid} employee={employee} />
  ));
  return (
    <table className="employee-table">
      <thead>
        <tr>
          {/* <th>employeeid</th> */}
          <th>firstname</th>
          <th>lastname</th>
          <th>age</th>
          <th>dateofjoining</th>
          <th>title</th>
          <th>department</th>
          <th>employeetype</th>
          <th>currentstatus</th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
  );
}

class EmployeeCreate extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.employeeCreate;
    const defaultCurrentStatus = "1";
    const employee = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      age: parseInt(form.age.value, 10),
      dateofjoining: new Date(form.dateofjoining.value).toISOString(),
      title: form.title.value,
      department: form.department.value,
      employeetype: form.employeetype.value,
      currentstatus: defaultCurrentStatus,
    };
    this.props.createEmployee(employee);
    form.firstname.value = "";
    form.lastname.value = "";
    form.age.value = "";
    form.dateofjoining.value = "";
    form.title.value = "";
    form.department.value = "";
    form.employeetype.value = "";
  }
  render() {
    const titleOptions = ["Employee", "Manager", "Director", "VP"];
    const departmentOptions = ["IT", "Marketing", "HR", "Engineering"];
    const employeeTypeOptions = [
      "FullTime",
      "PartTime",
      "Contract",
      "Seasonal",
    ];

    return (
      <form
        name="employeeCreate"
        onSubmit={this.handleSubmit}
        className="form-container">
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          className="input-field"
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          className="input-field"
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          className="input-field"
        />
        <input
          type="date"
          name="dateofjoining"
          placeholder="dateofjoining"
          className="input-field"
        />

        <select name="title" defaultValue="" className="select-field">
          <option value="" disabled hidden>
            Choose Title
          </option>
          {titleOptions.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>

        <select name="department" defaultValue="" className="select-field">
          <option value="" disabled hidden>
            Choose Department
          </option>
          {departmentOptions.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>

        <select name="employeetype" defaultValue="" className="select-field">
          <option value="" disabled hidden>
            Employee Type
          </option>
          {employeeTypeOptions.map((employeetype) => (
            <option key={employeetype} value={employeetype}>
              {employeetype}
            </option>
          ))}
        </select>

        <button className="add-button">Add</button>
      </form>
    );
  }
}

class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    this.state = { employees: [] };
    this.createEmployee = this.createEmployee.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query{
      employeeList{
        employeeid firstname lastname age dateofjoining title department employeetype currentstatus
      }
    }`;
    const response = await fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const body = await response.text();
    console.log(body);
    const result = JSON.parse(body, jsonDateReviver);
    this.setState({ employees: result.data.employeeList });
  }

  async createEmployee(employee) {
    const formattedDateOfJoining = employee.dateofjoining
      ? `"${new Date(employee.dateofjoining).toISOString()}"`
      : "null";
    const query = `mutation{
      employeeAdd(employee:{
          firstname:"${employee.firstname}",
          lastname:"${employee.lastname}",
          age:${employee.age},
          dateofjoining:${formattedDateOfJoining},
          title:"${employee.title}",
          department:"${employee.department}",
          employeetype:"${employee.employeetype}",
          currentstatus:"${employee.currentstatus}"
      }){
        employeeid
      }
    }`;
    const response = await fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    this.loadData();
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="employee-details-heading">Employee Details</h1>
        <EmployeeSearch />
        <hr />
        <EmployeeTable employees={this.state.employees} />
        <hr />
        <EmployeeCreate createEmployee={this.createEmployee} />
        <hr />
      </React.Fragment>
    );
  }
}

const contentdiv = ReactDOM.createRoot(document.getElementById("content"));
const element = <EmployeeDirectory />;

contentdiv.render(element);
