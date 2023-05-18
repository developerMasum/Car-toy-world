import React from 'react';
import { FaArrowRight, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ToyCard = ({toy}) => {
  const {_id,description,picture_url,available_quantity,rating,price,seller_name,name,seller_email}= toy;
    return (
       <div >
         <div className="card card-compact  w-80 bg-base-100 shadow-xl h-full ">
        <img src={picture_url} alt="toy" />
        <div className="card-body">
          <h2 className="font-bold text-center">{rating}</h2>

          <div className=" text-center position-absolute bottom-0 end-50 mb-3">
                  <Rating
                    readonly
                    className="text-success"
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar> </FaStar>}
                    fullSymbol={<FaStar> </FaStar>}
                  />
                </div>
          
          <h2 className="font-bold text-lg text-center">{name}</h2>
         <p className=' text-center font-bold'>{price}</p>
          <div className="card-actions justify-end">
           <Link to={`/toys/${_id}`}>
           <button  className=""> <FaArrowRight className='text-xl text-red-500'/></button></Link>
          </div>
        </div>
      </div>
       </div>
    );
};

export default ToyCard;