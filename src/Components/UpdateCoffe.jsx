import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
       const coffeeUpdate = useLoaderData()
       console.log(coffeeUpdate)
       const  {_id ,name,suplier,category ,chef,teste,details,photo} = coffeeUpdate

 const handleUpdateCoffee =(event)=>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const suplier = form.suplier.value 
        const category = form.category.value 
        const chef = form.chef.value 
        const teste = form.teste.value  
        const details = form.details.value 
        const photo = form.photo.value 

  
      const updatecoffee = {name,suplier,category ,chef,teste,details,photo}
      console.log(updatecoffee)
  
      fetch(`http://localhost:5000/coffee/${_id  }` ,{
        method:"PUT",
        headers :{
        "content-type":"application/json"
        },
        body:JSON.stringify(updatecoffee)
      })
      .then(res=>res.json())
      .then(data =>{
          console.log(data)
          if(data.modifiedCount>0 ){
              Swal.fire({
                  title: 'success',
                  text: 'coffee update successfull',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
          }
      })
  
      }

   

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-center text-4xl mb-4 font-extrabold">update coffe : {name}</h2>
        <form onSubmit={handleUpdateCoffee}>
            <div className="md:flex gap-5">
                <div className="md:w-1/2">
                    <label className="text-lg">Name</label> <br/>
                <input type="text" placeholder="enter coffee name" name="name" defaultValue={name} className="input input-bordered w-full  mt-2 mb-3" /> <br/>

                    <label className="text-lg text-left">Supllier</label> <br/>
                <input type="text" placeholder="enter coffee suplier" name="suplier" defaultValue={suplier} className="input input-bordered w-full  mt-2 mb-3" /> <br/>

                    <label className="text-lg">Category</label> <br/>
                <input type="text" placeholder="enter coffee category" name='category' defaultValue={category} className="input input-bordered w-full  mt-2 mb-3" /> <br/>
                </div>

                <div className="w-1/2">
                    <label className="text-lg">Chef</label> <br/>
                <input type="text" placeholder="enter coffee chef" name="chef" defaultValue={chef} className="input input-bordered w-full  mt-2 mb-3" /> <br/>

                    <label className="text-lg text-left">Teste</label> <br/>
                <input type="text" placeholder="enter coffee test" name="teste" defaultValue={teste} className="input input-bordered w-full  mt-2 mb-3" /> <br/>

                    <label className="text-lg">Details</label> <br/>
                <input type="text" placeholder="enter coffee category" name="details" defaultValue={details} className="input input-bordered w-full  mt-2 mb-3" /> <br/>
                </div>
            </div>

            <div>
            <label className="text-lg">Photo</label> <br/>
                <input type="text" placeholder="photo url" name="photo" defaultValue={photo} className="input input-bordered w-full mt-2 mb-4" /> <br/>
                <input type="submit" className="input input-bordered w-full text-xl bg-[#D2B48C] " value="Update coffee" />
            </div>
        </form>
 

 



    </div>
    );
};

export default UpdateCoffe;