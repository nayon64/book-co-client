import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../conponents/CustomButton/CustomButton';
import Loader from '../../../conponents/Loader/Loader';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddAProduct = () => {

  const { register, handleSubmit, formState: { errors } ,reset} = useForm()
  const { user } = useContext(AuthContext)

  const navigate=useNavigate()
  
  const imageHostKey = process.env.REACT_APP_imgbb_API_KEY;


  const { data: bookCategorys = [] ,isLoading} = useQuery({
    queryKey: ["categoryNames"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categoryNames");
      const data = res.json();
      return data;
    },
  });

  const handleAddProduct = data => {

    const image = data.bookImg[0];
    const formData = new FormData();
    formData.append("image", image);

    // set book image in imabb 
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        console.log(imgData?.data?.display_url)
        if (imgData?.data?.display_url) {
          
          const bookInfo = {
            bookName: data.bookName,
            bookCategory: data.bookCategory,
            originalPrice: data.originalPrice,
            sellingPrice: data.sellingPrice,
            bookUsed: data.bookUsed,
            bookDescription: data.bookDescription,
            bookImg: imgData?.data?.display_url,
            bookCondition: data.bookCondition,
            sellerPhone: data.sellerPhone,
            sellerLocation: data.sellerLocation,
            sellerEmail: user.email,
            publishDate: new Date(),
            sellerName: user.displayName,
          };

          // post book data in database 
          fetch("http://localhost:5000/seller/addBookItem", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(bookInfo),
          })
            .then(res => res.json())
            .then(data => {
              if (data.acknowledged) {
                toast.success("Your data saved in database");
                reset()
                navigate("/dashboard/myProducts");
              }
                
          })
        }
    })

    
  }

  if (isLoading) {
    return <Loader></Loader>
  }

	return (
    <div className="min-h-screen border rounded-md md:ml-4 mx-4 p-4">
      <h2 className="text-3xl text-primary font-bold text-center mt-4 md:mt-6 mb-4">
        Add A Book For Sell
      </h2>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="flex flex-col gap-3"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base text-secondary font-semibold">
                Book Title
              </span>
            </label>
            <input
              type="text"
              {...register("bookName", {
                required: "Please Write Your Book Name",
              })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            {errors.bookName && (
              <label className="label py-0">
                <p className="text-rose-400">{errors?.bookName?.message}</p>
              </label>
            )}
          </div>

          <div className="form-control select-bordered w-full">
            <label className="label">
              <span className="label-text text-base text-secondary font-semibold">
                Select Book Category
              </span>
            </label>
            <select
              {...register("bookCategory", {
                required: "Please select your book category.",
              })}
              className="select select-bordered max-w-sm"
            >
              {bookCategorys.map((bookCategory) => (
                <option key={bookCategory._id} value={bookCategory.category}>
                  {bookCategory.category}
                </option>
              ))}
            </select>
            {errors.bookCategory && (
              <label className="label py-0">
                <p className="text-rose-400">{errors?.bookCategory?.message}</p>
              </label>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base text-secondary font-semibold">
                Original Price
              </span>
            </label>
            <input
              {...register("originalPrice", {
                required: "Please Write your buying price.",
                min: { value: 0, message: "You Can't provied negetive value." },
              })}
              type="number"
              placeholder="Original Price"
              className="input input-bordered w-full "
            />
            {errors.originalPrice && (
              <label className="label py-0">
                <p className="text-rose-400">
                  {errors?.originalPrice?.message}
                </p>
              </label>
            )}
            {errors.sellingPrice?.message?.min && (
              <label className="label py-0">
                <p className="text-rose-400">
                  {errors?.sellingPrice?.message?.min}
                </p>
              </label>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base text-secondary font-semibold">
                Selling Price
              </span>
            </label>
            <input
              {...register("sellingPrice", {
                required: "Please Write your selling price.",
                min: { value: 0, message: "You Can't provied negetive value." },
              })}
              type="number"
              placeholder="Selling Price"
              className="input input-bordered w-full "
            />
            {errors.sellingPrice && (
              <label className="label py-0">
                <p className="text-rose-400">{errors?.sellingPrice?.message}</p>
              </label>
            )}
            {errors.sellingPrice?.message?.min && (
              <label className="label py-0">
                <p className="text-rose-400">
                  {errors?.sellingPrice?.message?.min}
                </p>
              </label>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base text-secondary font-semibold">
                Book Used
              </span>
            </label>
            <input
              {...register("bookUsed", {
                required: "Please Write your using time.",
              })}
              type="text"
              placeholder="3 months 1 year"
              className="input input-bordered w-full "
            />
            {errors.bookUsed && (
              <label className="label py-0">
                <p className="text-rose-400">{errors?.bookUsed?.message}</p>
              </label>
            )}
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base text-secondary font-semibold">
              Book Description
            </span>
          </label>
          <textarea
            {...register("bookDescription", {
              required: "Please Write about book.",
            })}
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Write about book..."
          ></textarea>
          {errors.bookDescription && (
            <label className="label py-0">
              <p className="text-rose-400">
                {errors?.bookDescription?.message}
              </p>
            </label>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base text-secondary font-semibold">
                Select Your Book Cover Photo
              </span>
            </label>
            <input
              {...register("bookImg", {
                required: "Please Select a book Image",
              })}
              type="file"
              className="file-input file-input-bordered w-full "
            />
            {errors.bookImg && (
              <label className="label py-0">
                <p className="text-rose-400">{errors?.bookImg?.message}</p>
              </label>
            )}
          </div>
          <div className="form-control select-bordered w-full">
            <label className="label">
              <span className="label-text text-base text-secondary font-semibold">
                Select Book Condtion
              </span>
            </label>
            <select
              {...register("bookCondition", {
                required: "Please select your book conditon.",
              })}
              className="select select-bordered max-w-sm"
            >
              <option value={"Excellent"}>Excellent</option>
              <option value={"Good"}>Good</option>
              <option value={"Fair"}>Fair</option>
            </select>
            {errors.bookCondition && (
              <label className="label py-0">
                <p className="text-rose-400">
                  {errors?.bookCondition?.message}
                </p>
              </label>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base text-secondary font-semibold">
                Your Mobile Number
              </span>
            </label>
            <input
              {...register("sellerPhone", {
                required: "Please Write your phone number.",
              })}
              type="Number"
              placeholder="Your Phone Number"
              className="input input-bordered w-full "
            />
            {errors.sellerPhone && (
              <label className="label py-0">
                <p className="text-rose-400">{errors?.sellerPhone?.message}</p>
              </label>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base text-secondary font-semibold">
                Your Location
              </span>
            </label>
            <input
              {...register("sellerLocation", {
                required: "Please write your location.",
              })}
              type="text"
              placeholder="Location"
              className="input input-bordered w-full "
            />
            {errors.sellerLocation && (
              <label className="label py-0">
                <p className="text-rose-400">
                  {errors?.sellerLocation?.message}
                </p>
              </label>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base text-secondary font-semibold">
                Book Used
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="block">
          <CustomButton>
            <input
              className="w-full h-full cursor-pointer"
              type="submit"
              value="Publish"
            />
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default AddAProduct;