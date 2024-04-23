import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useReducer, useState } from 'react'
// import { X } from 'react-bootstrap-icons';

const ReducerCrud = () => {

    const blankObj = {id: 0, fname: "", lname: "", profile: "",password:"",email:"",mobileno:"",date:"", gender: "", hobby: []}
    const [obj, setObj] = useState({...blankObj});
    // const ary = [];

    const [ary1,setAry] = useState([]);
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) || 0);

    const ReducerArray = (state,action) =>{
        switch(action.type){
            case "insert":
                return [...state , action.obj]

            case "update":
                return state.map(item =>
                    item.id === action.obj.id ? { ...item, ...action.obj } : item
                );

            case "delete" : 
            return state.filter((x,index) => index != action.i);
                
        }
    }

    const [ary, dispatch] = useReducer(ReducerArray , ary1);

    useEffect(() => {
        localStorage.setItem("ary" , JSON.stringify(ary));
      },[ary])
    

    const handleChange = async (e) => {
        const target = e.target;
        if(target.name == "hobby"){
            if(target.checked){
                obj.hobby = [...obj.hobby, target.value];
            }
            else{
                obj.hobby = obj.hobby.filter(x => x != target.name);
            }
        }
        else if(target.name == "profile"){
            let img = target.files[0];
            obj.profile = img ? await toBase64(img) : "";
            console.log(obj.profile)
        }
        else{
            obj[target.name] = target.value;
        }
        setObj({...obj});
    }


    const insertData =() =>{
        if(obj.id == 0){
            let number = count + 1;
            setCount(number);
            obj.id = number;
            // ary.push({...obj});
            localStorage.setItem("count", JSON.stringify(number));
            dispatch({
                type :"insert",
                obj : obj
            })
        }
        else{
            const index = ary.findIndex(x => x.id == obj.id);
            ary.splice(index, 1, obj);
            dispatch({
                type :"update",
                obj : obj
            })
        }
        // setAry([...ary]);
        // localStorage.setItem("ary", JSON.stringify(ary));
        setObj({...blankObj});

    }

    const deleteData = (i) => {
        // ary.splice(i,1);
        dispatch({
            type : 'delete',
            i : i
        })
        // setAry([...ary]);
        // localStorage.setItem("ary", JSON.stringify(ary));
    }

    const editData = (x) => {
        setObj({...x});
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });



  return (
    <>
     <div className='container mt-5 '>

<form action="" className="shadow-lg p-3 rounded-3 bg-success-subtle" id="form">
<label htmlFor="">First Name :</label>
<input type="text" name="fname" value={obj.fname} className="input_group w-100 pt-2 " onChange={handleChange}/> <br />

<label htmlFor="">Last Name:</label>
<input type="text" name="lname" value={obj.lname} className="input_group w-100 pt-2" onChange={handleChange}/> <br />

<label htmlFor="">Mobile-no :</label>
<input type="tel" name="mobileno" value={obj.mobileno} className="input_group w-100 pt-2" onChange={handleChange}/> <br />

<label htmlFor="">date :</label>
<input type="date" name="date" value={obj.date} className="input_group w-100 pt-2" onChange={handleChange}/> <br />

<input type="file" name="profile" onChange={handleChange} className='pt-3' style={{width: '50px', height: '50px',}}/> <br />

<label htmlFor="" className="mt-2">Gender :</label> <br/>
<input type="radio" name="gender" className="gender" checked={obj.gender?.includes("Male")} value="Male" onChange={handleChange}/> Male
<input type="radio" name="gender" className="gender ms-2" checked={obj.gender?.includes("Female")} value="Female" onChange={handleChange}/> Female <br/>

<label htmlFor="" className='pt-2'>Hobby :</label> <br/>
<input type="checkbox" name="hobby" className="me-1" checked={obj.hobby?.includes("Read")} value="Read" onChange={handleChange}/>Read
<input type="checkbox" name="hobby" className="mx-1" checked={obj.hobby?.includes("Traveling")} value="Traveling" onChange={handleChange}/>Traveling
<input type="checkbox" name="hobby" className="mx-1" checked={obj.hobby?.includes("Write")} value="Write" onChange={handleChange}/>Write <br/>

<button type="button" className="btn btn-success mt-3" onClick={insertData}>Save</button>

</form>

<table className='table table-warning mt-5 table-striped '>
<thead>
<tr>
  <th>ID</th>
  <th>Profile</th>
  <th>First name:</th>
  <th>Last name:</th>
  <th>Mobile-no</th>
  <th>date</th>
  <th>Gender</th>
  <th>Hobby</th>
  <th>Action</th>
</tr>
</thead>
<tbody>
{
    ary.map((x,i) => {
        return <tr key={i+"func"}>
            <td>{x.id}</td>
            <td><img src={x.profile} width={50} className='img-fluid' alt="" /></td>
            <td>{x.fname}</td>
            <td>{x.lname}</td>
            <td>{x.mobileno}</td>
            <td>{x.date}</td>
            <td>{x.gender}</td>
            <td>{x.hobby?.join(", ")}</td>
            <td>
                <button type='button' className='btn btn-warning' onClick={() => editData(x)}>Edit</button>
                <button type='button' className='btn btn-danger ms-2' onClick={() => deleteData(i)}>Delete</button>
            </td>
        </tr>
    })
}
</tbody>
</table>

</div>                                                              
    </>
  )
}

export default ReducerCrud