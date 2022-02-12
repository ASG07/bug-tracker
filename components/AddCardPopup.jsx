import React from 'react';
import { IoClose, } from "react-icons/io5";
import { useForm } from 'react-hook-form';


const AddCardPopup = ({closeAddCardForm, employees, addCard }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    console.log(data);
    addCard(data);
  }
  //console.log(errors);

  return <>
    <div className='mask' onClick={(e) => e.target === e.currentTarget && closeAddCardForm()}>
      <div className='add-card-form-frame'>
        <div className='add-card-form-frame__exit-button' onClick={() => closeAddCardForm()}><IoClose size={20} /></div>

        <form onSubmit={handleSubmit(onSubmit)} className='addPopup'>
          <h1 className='addPopup__title'>Add New Card</h1>

          <p className='addPopup__subtitle'>Title: {errors.title && <span className='warning'>Required*</span>}</p>
          <input type="text" placeholder="Title" {...register("title", { required: true, maxLength: 30 })} id='name' className='addPopup__input priority'></input>

          <p className='addPopup__subtitle'>Priority: {errors.priority && <span className='warning'>Required*</span>}</p>
          <select {...register("priority", { required: true })} id='priority' className='addPopup__input priority'>
            <option value="" disabled selected>Select Priority</option>
            <option value="very-high">Very-High</option>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>

          <p className='addPopup__subtitle'>Description: {errors.description && <span className='warning'>Required*</span>}</p>
          <textarea {...register("description", { required: true })} cols={40} id='description' className='addPopup__input'></textarea>

          <p className='addPopup__subtitle'>employee: {errors.employee && <span className='warning'>Required*</span>}</p>
          <select {...register("employeeId", { required: true })} type='text' id='employee' className='addPopup__input'>
            <option value="" disabled selected>Select Employee</option>
            {employees.length > 0 ? employees.map(employee => <option value={employee.id} key={employee.id}>{employee.name}</option>) : <option value="">No Employee Found</option>}
          </select>


          <p className='addPopup__subtitle'>State: {errors.state && <span className='warning'>Required*</span>}</p>
          <select className='addPopup__input' {...register("state", { required: true })}>
            <option value="analysis">Analysis</option>
            <option value="inProgress">In Progress</option>
            <option value="finished">Finished</option>
          </select>

          <br />
          <input className='btn-submit' type='submit' value='Add'></input>
          <br />
        </form>

      </div>
    </div>
  </>;
};

export default AddCardPopup;
