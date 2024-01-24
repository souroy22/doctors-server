import data from "../data/doctorsData.js";

const doctorsController = {
  getDoctorsBasedOnCity: async (req, res) => {
    try {
      const { city } = req.query;
      if (!city?.trim()) {
        return res.status(400).json({ error: "Please provide a city name" });
      }
      const doctors = data.filter(
        (doctor) => doctor.city.toLowerCase() === city.trim().toLowerCase()
      );
      return res.status(200).json({ doctors });
    } catch (error) {
      console.log(
        `Error while getting doctors based on city, ERROR: ${error.message}`
      );
    }
  },
};

export default doctorsController;
