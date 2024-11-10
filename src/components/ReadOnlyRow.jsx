import React from 'react'

const ReadOnlyRow = ({info, handleEditClick}) => {
    return (
        <tr>
            <td>{info.app_id}</td>
            <td>{info.comp_id}</td>
            <td>{info.project}</td>
            <td>{info.env}</td>
            <td>{info.loc}</td>
            <td>{info.cost_type}</td>
            <td>{info.forecast_unit}</td>
            <td>{info.sku_info}</td>
            <td>{info.comments}</td>
            <td>{info.units}</td>
            <td>{info.hours}</td>
            <td>
                <button type='button' onClick={(event)=>{handleEditClick(event,info)}}>Edit</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow
