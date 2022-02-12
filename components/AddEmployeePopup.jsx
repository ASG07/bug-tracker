import React from 'react';
import { IoClose, } from "react-icons/io5";
import { useForm } from 'react-hook-form';


const AddEmployeePopup = ({ closeAddEmployeeForm, addEmployee}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    console.log(data);
    addEmployee(data);
  }
  console.log(errors);

  return <>
    <div className='mask' onClick={(e) => e.target === e.currentTarget && closeAddEmployeeForm()}>
      <div className='add-card-form-frame'>
        <div className='add-card-form-frame__exit-button' onClick={() => closeAddEmployeeForm()}><IoClose size={20} /></div>

        <form onSubmit={handleSubmit(onSubmit)} className='addPopup'>
          <h1 className='addPopup__title'>Add New Employee</h1>

          <p className='addPopup__subtitle'>Name: {errors.name && <span className='warning'>Required*</span>}</p>
          <input type="text" placeholder="name" {...register("name", { required: true, maxLength: 30 })} id='name' className='addPopup__input priority'></input>

          

          <br />
          <input className='btn-submit' type='submit' value='Add'></input>
          <br />
        </form>

      </div>
    </div>
  </>;
};

export default AddEmployeePopup;