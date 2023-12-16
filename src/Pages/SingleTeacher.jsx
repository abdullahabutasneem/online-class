

const SingleTeacher = ({teach}) => {
    const {name, designation, photo, contact} = teach;
    return (
        <div  className="bg-slate-200 border-black border-[1px] border-solid">
            <div className="p-10">
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    <p>{designation}</p>
                </div>
                <div>
                    <p>{contact}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTeacher;