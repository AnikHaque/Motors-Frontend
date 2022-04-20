import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddInstructor.css';

const AddInstructor = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://glacial-brook-92372.herokuapp.com/instructor',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-course container'>
            <h1 className='text-center fw-bold  mt-5 text-dark'>Please Add a Instructor !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",)} placeholder="Instructor Name" />
      <input {...register("designation",)} placeholder="Instructor Designation"/>
      <input {...register("description",)} placeholder="Instructor Description"/>
      <input type="number" {...register("rating", )} placeholder="Course Rating"/>
      <input {...register("img",)} placeholder="Instructor Image"/>
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddInstructor;