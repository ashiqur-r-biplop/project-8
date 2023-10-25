import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const bangladeshDistricts = [
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Barishal",
  "Bhola",
  "Bogra",
  "Brahmanbaria",
  "Chandpur",
  "Chapainawabganj",
  "Chattogram",
  "Chuadanga",
  "Cox's Bazar",
  "Cumilla",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore",
  "Jhalokati",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
];

function BusPostForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Add an empty array for the 'bookedSeat' property
    data.bookedSeat = [];

    console.log(data);
    const t = data.to;

    fetch("http://localhost:5000/post-bus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `${t}`,
            text: "Data submitted successfully.",
          });
          reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Failed to submit data. Please try again later.",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Please try again later.",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">To:</label>
            <select
              {...register("to", { required: true })}
              name="to"
              className="w-full py-2 px-3 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select a destination</option>
              {bangladeshDistricts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Date:</label>
            <input
              type="date"
              {...register("date", { required: true })}
              name="date"
              className="w-full py-2 px-3 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Bus Type:</label>
            <select
              {...register("busType", { required: true })}
              name="busType"
              className="w-full py-2 px-3 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Schedule:</label>
            <select
              {...register("schedule", { required: true })}
              name="schedule"
              className="w-full py-2 px-3 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="07:00 AM">07:00 AM</option>
              <option value="06:00 PM">06:00 PM</option>
            </select>
          </div>
          <button type="submit" className="brand-btn py-2 px-4 w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusPostForm;
