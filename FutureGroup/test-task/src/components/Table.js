import React, { Component } from 'react';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isOpen: false,
      startIntervalIdOfElements: 1,
      endIntervalIdOfElements: 50,
      sortID: false

    };
  }

  sID(a, b) {
    if (a._id > b._id) return 1;
    else if (a._id < b._id) return -1;
    else return 0;
  }

  componentWillMount() {
    let getData = new XMLHttpRequest();
    let HTTP = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    getData.open("GET", HTTP, true);
    getData.onreadystatechange = () => {
      if (getData.readyState !== 4 || getData.status !== 200) return;
      var data = JSON.parse(getData.responseText);

      data.forEach((item, i) => {
        item._id = i + 1;
      });
      
      this.setState({ data })

    };
    getData.send();

  }



  render() {
    let component = null;
    if (!this.state.data) {
      component = <tbody><tr><td><h1>Loading...</h1></td></tr></tbody>
    }
    else {
      let intervalData = this.state.data.filter((elem) => {
        return elem._id >= this.state.startIntervalIdOfElements && elem._id <= this.state.endIntervalIdOfElements;
      });
      intervalData.sort(this.sID);

      component =
        <tbody>{intervalData.map((tbodyPeople) =>
          <tr key={tbodyPeople._id}>
            <td>{tbodyPeople._id}</td>
            <td>{tbodyPeople.id}</td>
            <td>{tbodyPeople.firstName}</td>
            <td>{tbodyPeople.lastName}</td>
            <td>{tbodyPeople.email}</td>
            <td>{tbodyPeople.phone}</td>
            <td>{tbodyPeople.address.state}, {tbodyPeople.address.city}, {tbodyPeople.address.streetAddress}, {tbodyPeople.address.zip} </td>
            <td>{tbodyPeople.description}</td>
          </tr>)
        }
        </tbody>
    }
    return (
      <div className="App container">
        <h1>
          Header
          </h1>
        <table className="table container">
          <thead>
            <tr>
              <th> № </th>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Description</th>
            </tr>
          </thead>
          {component}
        </table>
      </div>
    );
  }
}
export default Table;
