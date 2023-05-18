// import React, { useEffect, useState } from 'react';
// import ToyCard from './ToyCard';

// const AllToy = () => {
//     const [toys,setToys] = useState([]);
//     useEffect(()=>{
//         fetch('http://localhost:5000/toys')
//         .then(res=>res.json())
//         .then(data=>{
//             setToys(data);
//         })
//     },[])
//     return (
//         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-10 my-container'>
//             {
//                 toys.map(toy=> <ToyCard
//                 key={toy._id}
//                 toy = {toy}
                
//                 >

//                 </ToyCard>)
//             }

//         </div>
//     );
// };

// export default AllToy;