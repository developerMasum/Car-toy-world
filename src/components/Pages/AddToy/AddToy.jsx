import React from "react";

const AddToy = () => {
  const handleAddToy = () => {};
  return (
    <div className="bg-pink-50 p-24">
      <h2 className="text-3xl text-center font-bold  "> add a coffee </h2>
      <form onSubmit={handleAddToy}>
        {/* row  coffee name */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* row  coffee qunatity */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row  coffee supplier */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                name="details"
                className="input input-bordered h-20 w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <button className="btn btn-block mt-5">add new </button>
      </form>
    </div>
  );
};

export default AddToy;
