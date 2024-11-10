import { useState, Fragment } from 'react'
import {nanoid} from "nanoid"
import './App.css'
import ReadOnlyRow from './components/ReadOnlyRow'
import EditableRow from './components/EditableRow'

function App() {
  const [inputarr, setInputarr] = useState([])
  const [inputdata, SetInputdata] = useState({ app_id: "", comp_id: "", project: "", env: "", loc: "", cost_type: "", forecast_unit: "", sku_info: "", comments: "", units: 0, hours: 0 })
  const [editId,setEditId] = useState(null)
  const [editFormData, setEditFormData] = useState({ app_id: "", comp_id: "", project: "", env: "", loc: "", cost_type: "", forecast_unit: "", sku_info: "", comments: "", units: 0, hours: 0 })

  function changeHandle(e) {
    SetInputdata({
      ...inputdata,
      [e.target.name]: e.target.value
    })
  }

  let { app_id, comp_id, project, env, loc, cost_type, forecast_unit, sku_info, comments, units, hours } = inputdata;

  function handleFormSubmit(event) {
    event.preventDefault()

    const newInput = {
      id: nanoid(),
      app_id: inputdata.app_id,
      comp_id: inputdata.comp_id,
      project: inputdata.project,
      env: inputdata.env,
      loc: inputdata.loc,
      cost_type: inputdata.cost_type,
      forecast_unit: inputdata.forecast_unit,
      sku_info: inputdata.sku_info,
      comments: inputdata.comments,
      units: inputdata.units,
      hours: inputdata.hours
    }

    const newInputarr = [...inputarr,newInput]
    setInputarr(newInputarr)

    // setInputarr([...inputarr, { app_id, comp_id, project, env, loc, cost_type, forecast_unit, sku_info, comments, units, hours }])
    console.log(inputarr)
    console.log(inputdata)
    SetInputdata({ app_id: "", comp_id: "", project: "", env: "", loc: "", cost_type: "", forecast_unit: "", sku_info: "", comments: "", units: 0, hours: 0 })
  }

  const handleEditFormSubmit = (e) =>{
    e.preventDefault()

    const editedInfo = {
      id: editId,
      app_id: editFormData.app_id,
      comp_id: editFormData.comp_id,
      project: editFormData.project,
      env: editFormData.env,
      loc: editFormData.loc,
      cost_type: editFormData.cost_type,
      forecast_unit: editFormData.forecast_unit,
      sku_info: editFormData.sku_info,
      comments: editFormData.comments,
      units: editFormData.units,
      hours: editFormData.hours
    }

    const newInputarr = [...inputarr]

    const index = inputarr.findIndex((info)=> info.id === editId)

    newInputarr[index] = editedInfo

    setInputarr(newInputarr)
    setEditId(null)
  }

  const handleEditClick = (event,info) =>{
    event.preventDefault();
    setEditId(info.id);

    const formValues = {
      app_id: info.app_id,
      comp_id: info.comp_id,
      project: info.project,
      env: info.env,
      loc: info.loc,
      cost_type: info.cost_type,
      forecast_unit: info.forecast_unit,
      sku_info: info.sku_info,
      comments: info.comments,
      units: info.units,
      hours: info.hours
    }

    setEditFormData(formValues)
  }

  const handleEditFormChange = (e) =>{
    e.preventDefault();
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="my-style">

        <form className="form-style">

          <div className="form-group">
            <label>App ID</label>
            <input type="text" name='app_id' value={inputdata.app_id} onChange={changeHandle} className="form-control" id="app-id" placeholder="App ID" />
          </div>

          <div className="form-group">
            <label>Component ID</label>
            <input type="text" name='comp_id' value={inputdata.comp_id} onChange={changeHandle} className="form-control" id="Component-id" placeholder="Component ID" />
          </div>

          <div className="form-group">
            <label>GCP Project</label>
            <input type="text" name='project' value={inputdata.project} onChange={changeHandle} className="form-control" id="gcp" placeholder="GCP Project" />
          </div>

          <div className="form-group">
            <label>Env</label>
            <select name='env' value={inputdata.env} onChange={changeHandle} className="form-control">
              <option></option>
              <option>Dev</option>
              <option>Prod</option>
              <option>QA</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" name='loc' value={inputdata.loc} onChange={changeHandle} className="form-control" id="loc" placeholder="Location" />
          </div>

          <div className="form-group">
            <label>Cost Type</label>
            <input type="text" name='cost_type' value={inputdata.cost_type} onChange={changeHandle} className="form-control" id="cost-type" placeholder="Cost Type" />
          </div>

          <button type='button' onClick={handleFormSubmit}>Add</button>

        </form>


        <form className="form-style right-form-style">
          <div className="form-group">
            <label>Forecast Units</label>
            <select name='forecast_unit' value={inputdata.forecast_unit} onChange={changeHandle} className="form-control">
              <option></option>
              <option>Compute vCPU</option>
              <option>Compute Ram</option>
              <option>Compute PD</option>
              <option>Compute Backup</option>
              <option>Kubernetes / Anthos Cores</option>
              <option>Windows Licensing Cores</option>

            </select>
          </div>

          <div className="form-group">
            <label>Sku Info</label>
            <input type="text" name='sku_info' value={inputdata.sku_info} onChange={changeHandle} className="form-control" id="sku-info" placeholder="Sku Info (Standard Pricing Used)" />
          </div>

          <div className="form-group">
            <label>Comments</label>
            <input type="text" name='comments' value={inputdata.comments} onChange={changeHandle} className="form-control" id="comments" placeholder="Comments" />
          </div>

          <div className="form-group">
            <label>Units at Full Ramp</label>
            <input type="number" name='units' value={inputdata.units} onChange={changeHandle} className="form-control" id="full-ramp-units" placeholder="Units" />
          </div>

          <div className="form-group">
            <label>Weekly Hours used</label>
            <input type="number" name='hours' value={inputdata.hours} onChange={changeHandle} className="form-control" id="weekly-hours" placeholder="Weekly Hours used" />
          </div>
        </form>

      </div>

      <div className="my-table">
        <form onSubmit={handleEditFormSubmit}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">App ID</th>
                <th scope="col">Component ID</th>
                <th scope="col">GCP Project</th>
                <th scope="col">Env</th>
                <th scope="col">Location</th>
                <th scope="col">Cost Type</th>
                <th scope="col">Forecast Unit</th>
                <th scope="col">Sku Info</th>
                <th scope="col">Commments</th>
                <th scope="col">Units at Full Ramp</th>
                <th scope="col">Weekly Hours Used</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                inputarr.map(
                  (info, ind) => {
                    return (
                      <Fragment>
                        {editId === info.id ? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>) : (<ReadOnlyRow info={info} handleEditClick={handleEditClick}/>)}
                      </Fragment>
                    )
                  }
                )
              }
            </tbody>
          </table>
        </form>
      </div>

      <div className="submitBtn">
        <button type='button'>Submit</button>
      </div>
    </>
  )
}

export default App
