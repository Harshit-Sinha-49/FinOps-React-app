import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange}) => {
    return (
        <tr>
            <td style={{height: "inherit"}}>
                <input type="text" name='app_id' value={editFormData.app_id} onChange={handleEditFormChange} className="editForm" id="app-id" placeholder="App ID" />
            </td>
            <td style={{height: "inherit"}}>
                <input type="text" name='comp_id' value={editFormData.comp_id} onChange={handleEditFormChange} className="editForm" id="Component-id" placeholder="Component ID" />
            </td>
            <td style={{height: "inherit"}}>
                <input type="text" name='project' value={editFormData.project} onChange={handleEditFormChange} className="editForm" id="gcp" placeholder="GCP Project" />
            </td>
            <td style={{height: "inherit"}}>
                <select name='env' value={editFormData.env} onChange={handleEditFormChange} className="editForm">
                    <option></option>
                    <option>Dev</option>
                    <option>Prod</option>
                    <option>QA</option>
                </select>
            </td>
            <td style={{height: "inherit"}}>
                <input type="text" name='loc' value={editFormData.loc} onChange={handleEditFormChange} className="editForm" id="loc" placeholder="Location" />
            </td>
            <td style={{height: "inherit"}}>
                <input type="text" name='cost_type' value={editFormData.cost_type} onChange={handleEditFormChange} className="editForm" id="cost-type" placeholder="Cost Type" />
            </td>
            <td style={{height: "inherit"}}>
                <select name='forecast_unit' value={editFormData.forecast_unit} onChange={handleEditFormChange} className="editForm">
                    <option></option>
                    <option>Compute vCPU</option>
                    <option>Compute Ram</option>
                    <option>Compute PD</option>
                    <option>Compute Backup</option>
                    <option>Kubernetes / Anthos Cores</option>
                    <option>Windows Licensing Cores</option>

                </select>
            </td>
            <td style={{height: "inherit"}}>
                <input type="text" name='sku_info' value={editFormData.sku_info} onChange={handleEditFormChange} className="editForm" id="sku-info" placeholder="Sku Info (Standard Pricing Used)" />
            </td>
            <td style={{height: "inherit"}}>
                <input type="text" name='comments' value={editFormData.comments} onChange={handleEditFormChange} className="editForm" id="comments" placeholder="Comments" />
            </td>
            <td style={{height: "inherit"}}>
                <input type="number" name='units' value={editFormData.units} onChange={handleEditFormChange} className="editForm" id="full-ramp-units" placeholder="Units" />
            </td>
            <td style={{height: "inherit"}}>
                <input type="number" name='hours' value={editFormData.hours} onChange={handleEditFormChange} className="editForm" id="weekly-hours" placeholder="Weekly Hours used" />
            </td>
            <td>
                <button type='submit'>Save</button>
            </td>
        </tr>
    )
}

export default EditableRow
