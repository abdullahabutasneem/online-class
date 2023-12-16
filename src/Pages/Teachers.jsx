import { useState } from "react";
import SingleTeacher from "./SingleTeacher";
import { NavLink } from "react-router-dom";


const Teachers = () => {
    const [teacher, setTeacher] = useState([]);
    fetch('http://localhost:5000/teachers')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setTeacher(data);
    })
    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="max-w-[400px] md:max-w-[700px] lg:max-w-[1000px] mx-auto py-[180px] md:py-10">
                <div className="flex flex-col justify-center items-center">
                    <h1>Total Teacher: ${teacher.length}</h1>
                    <div className="grid grid-cols-1 gap-3">
                        {
                            teacher?.map(teach => <SingleTeacher key={teach._id} teach={teach}></SingleTeacher>)
                        }
                    </div>
                    <NavLink to="/addteachers"><button className="btn btn-link mt-10">Add Teacher</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Teachers;