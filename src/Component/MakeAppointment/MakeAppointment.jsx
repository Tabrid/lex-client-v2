const MakeAppointment = () => {
  return (
    <div className="hero bg-[#1d344a] sm:hidden">
      <div className="hero-content flex-col lg:flex-row-reverse md:flex-col items-center">
        <img
          src="https://i.ibb.co/QJCKyp0/image.png"
          className="max-w-lg rounded-lg shadow-2xl md:w-full"
          alt="Appointment Image"
        />
        <div className="w-full md:w-3/4 text-center md:text-left py-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Make an Appointment Today</h1>
          <p className="py-4 md:text-xl text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-neutral text-white">Appointment Here</button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
