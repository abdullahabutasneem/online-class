import { NavLink } from "react-router-dom";


const AddTeachers = () => {
    const handleFormData = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const designation = form.designation.value;
        // const photo = form.photo.value;
        const contact = form.contact.value;
        const prod = {
            name, designation, contact
        }

        fetch('http://localhost:5000/teachers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(prod)
        })
        .then(res => res.json())
        .then(data => {
            console.log("check under add products: ", data);
            alert("Added successfully!");
        })

        console.log(prod);
    }
    return (
        <div  className="bg-slate-200 py-10">
            <div className="max-w-[400px] md:max-w-[700px] lg:max-w-[1000px] mx-auto">
                <form onSubmit={handleFormData}>
                    <input className="w-2/3 mb-2 mt-3 border-gray-400 border-[1px] pl-3 py-2" placeholder="Name" type="text" name="name" id="" /><br />
                    {/* <input className="w-2/3 mb-2 mt-2 border-gray-400 border-[1px] pl-3 py-2" placeholder="Photo URL" type="text" name="photo" id="" /><br /> */}
                    <input className="w-2/3 mb-2 mt-2 border-gray-400 border-[1px] pl-3 py-2" placeholder="Designation" type="text" name="designation" id="" /><br />
                    <input className="w-2/3 mb-2 mt-2 border-gray-400 border-[1px] pl-3 py-2" placeholder="Contact No" type="text" name="contact" id="" /><br />
                    <input className=" mb-2 border-gray-400 border-[1px] px-5 py-3 bg-black text-white font-semibold cursor-pointer mt-5"  type="submit" value="Add Teacher" />
                </form>
            </div>
        </div>
    );
};

export default AddTeachers;