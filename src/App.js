import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.updateName = this.updateName.bind(this)
    this.updateLastName = this.updateLastName.bind(this)
    this.addName = this.addName.bind(this)
    this.state = {
      list:[],
      name: '',
      lastName: ''
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.addName}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.name} onChange={this.updateName}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name"  value={this.state.lastName} onChange={this.updateLastName}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
              {this.state.list.map((person, index) =>
                <tr key={index}>
                <td>{person.name}</td>
                <td>{person.lastName}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    })
  }
  updateLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  addName(e){
    e.preventDefault()
    this.setState({
      list: this.state.list.concat({name: this.state.name, lastName: this.state.lastName}),
      name: '',
      lastName: ''
    })
  }
}

export default App
