import React, { useState } from 'react'

const SelectionAandB = () => {
    const [ary, setAry] = useState([])
    const [value, setValue] = useState("")
    const [preValue, setPreValue] = useState("")

    const handleSubmit = () => {
        if(value && value != ""){
          if(value != preValue){
            ary.push([value])
          }
          else{
            ary[ary?.length - 1].push(value)
          }
        }
        setAry([...ary])
        setPreValue(value);
    }
  return (
    <>
    <div className='container p-3 w-25'>
        <select name="" id="" className='ps-5 pt-2 pb-2'  value={value} onChange={(e) => setValue(e.target?.value)} style={{width:"200px"}}>
            <option value="A" selected>A</option>
            <option value="B" selected>B</option>
        </select>
            <button type='button' className='ms-5  ps-5 pe-5 pt-2 pb-2' onClick={handleSubmit}>SAVE</button>
    </div>
    <div className='w-25 mx-auto'>
      <table className='table text-center'>
        <thead></thead>
        <tbody>
          <tr>
            {
              ary?.map(x => {
                return <td className='border'>
                  {
                    x?.map(e =>{
                      return <tr className='mx-auto'>{e}</tr>
                    })
                  }
                </td>
              })
            }
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default SelectionAandB