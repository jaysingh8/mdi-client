import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConsultDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // For appointment form state (store doctorId and appointment details)
  const [appointments, setAppointments] = useState({});

  const url =
    'https://gist.githubusercontent.com/jaysingh8/172a3be62ac204f5f1dbe4db26a9d2c9/raw/0365635c4b967b2dd0a2f214e27dec88f3a97474/doctor.json';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setDoctors(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching doctors');
        setLoading(false);
      });
  }, []);

  const handleInputChange = (doctorId, field, value) => {
    setAppointments((prev) => ({
      ...prev,
      [doctorId]: {
        ...prev[doctorId],
        [field]: value,
      },
    }));
  };

  const handleAppointmentSubmit = (doctorId) => {
    const appointment = appointments[doctorId];
    if (!appointment || !appointment.name || !appointment.date) {
      alert('Please fill your name and select appointment date');
      return;
    }
    
    alert(
      `Appointment booked!\nDoctor: ${
        doctors.find((d) => d.id === doctorId)?.name
      }\nName: ${appointment.name}\nDate: ${appointment.date}`
    );

    // Reset form for that doctor
    setAppointments((prev) => {
      const copy = { ...prev };
      delete copy[doctorId];
      return copy;
    });
  };

  if (loading)
    return <div className="text-center p-10 text-lg font-semibold">Loading doctors...</div>;
  if (error)
    return (
      <div className="text-center p-10 text-red-600 font-semibold">
        Error loading doctors: {error}
      </div>
    );

  return (
    <div className="mt-10 mx-5 mb-10 bg-amber-50 rounded-xl p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Consult a Doctor
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">{doc.name}</h2>
            <p className="mb-1 text-gray-700">
              <strong>Specialization:</strong> {doc.specialization}
            </p>
            <p className="mb-1 text-gray-700">
              <strong>Experience:</strong> {doc.experience}
            </p>
            <p className="mb-1 text-gray-700">
              <strong>Location:</strong> {doc.location}
            </p>
            <p className="mb-1 text-yellow-600 font-semibold">
              <strong>Rating:</strong> {doc.rating} ⭐
            </p>
            <p className="mb-1 text-gray-700">
              <strong>Phone:</strong> {doc.phone}
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Email:</strong> {doc.email}
            </p>

            {/* Appointment Form */}
            <div className="mt-auto pt-4 border-t">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Take Appointment</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={appointments[doc.id]?.name || ''}
                onChange={(e) =>
                  handleInputChange(doc.id, 'name', e.target.value)
                }
                className="w-full px-3 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="date"
                value={appointments[doc.id]?.date || ''}
                onChange={(e) =>
                  handleInputChange(doc.id, 'date', e.target.value)
                }
                className="w-full px-3 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                onClick={() => handleAppointmentSubmit(doc.id)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultDoctor;
