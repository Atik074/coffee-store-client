import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee , coffees , setCoffees}) => {
    const  {_id ,name,chef,teste,photo} = coffee

    const handleDelete =_id =>{
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

              fetch(`http://localhost:5000/coffee/${_id}`,{
                 method:"DELETE",
                 headers:{
                    'content-type' : 'application/json'
                 }
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount> 0){
                      Swal.fire(
                            'Deleted!',
                            'Your coffe has been deleted.',
                            'success'
                        )
             
                   const remaingCoffee = coffees.filter(cof => cof._id !== _id)
                   setCoffees(remaingCoffee)
                             
                }
              
              })


            }
          })
    }



 
    return (
        <div>
         <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={photo} alt="Movie"/></figure>
     <div className="flex justify-between w-full p-4 align-middle">
      <div>
      <h3 className="card-title">Name :{name}</h3>
       <p>Chef : {chef}</p>
       <p>Test: {teste}</p>
     
      </div>
      <div className="card-actions justify-end ">
       <div className="btn-group btn-group-vertical space-y-4">
     <button className="btn btn-neutral mb-2">View</button>
    <Link to={`/updateCoffe/${_id}`}>
    <button className="btn  mb-2 btn-neutral">Edit</button>
    </Link>
     <button onClick={()=>handleDelete(_id)}
     className="btn btn-accent">X</button>
     
     
   </div> 
      </div>

     
 

   </div>
</div>
        </div>
    );
};

export default CoffeeCard;