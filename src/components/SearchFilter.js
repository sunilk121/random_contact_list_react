import React from 'react'

export const SearchFilter = ({handleOnGenderChange, handleOnSerch}) => {
  return (
    <div className="row">
        <div className="col"><input type="text" className='form-control' onChange={handleOnSerch} /></div>
        <div className="col">
            <select 
            name="" 
            id="" 
            className='form-control' 
            onChange={handleOnGenderChange}>
                <option value="">--select Gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>

            </select>
        </div>
    </div>
  )
}
