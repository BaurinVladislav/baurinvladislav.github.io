import React, { Component } from 'react';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isOpen: false,
      intervalData: null
    };
  }

  componentDidMount() {
    let getData = new XMLHttpRequest();
    getData.open("GET", "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}", true);
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

  PaginationOfTables (startIntervalIdOfElements, endIntervalIdOfElements){
    var start = startIntervalIdOfElements
    var end = endIntervalIdOfElements;
    var intervalData = this.state.data;

   //console.log(intervalData)
    intervalData = intervalData.filter(function(elem){
      return elem._id == 5;
    //console.log("2 --- Полученные значения: " + startIntervalIdOfElements + " и другое: " + endIntervalIdOfElements)
    //console.log("elem._id: " + elem._id);
    })
    this.setState({ intervalData })
    console.log("PaginationOfTables: " + intervalData)
    }

  render() {
    this.PaginationOfTables('1', '10');
    
    let component = null;
    if (!this.state.data) {
      component = <tbody><tr><td><h1>Loading...</h1></td></tr></tbody>
    }
    else {
      component = <tbody>{this.state.data.map((tbodyPeople) =>
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
              <th>№</th>
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
