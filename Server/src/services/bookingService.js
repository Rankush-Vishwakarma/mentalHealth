const Booking = require('../models/Booking');

// Create a new booking
const createBooking = async (data) => {
  try {
    const booking = new Booking(data);
    await booking.save();
    return booking;
  } catch (error) {
    throw new Error('Error creating booking: ' + error.message);
  }
};

// Get all bookings
const getAllBookings = async () => {
  try {
    const bookings = await Booking.find();
    return bookings;
  } catch (error) {
    throw new Error('Error fetching bookings: ' + error.message);
  }
};

// Get a single booking by ID
const getBookingById = async (id) => {
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      throw new Error('Booking not found');
    }
    return booking;
  } catch (error) {
    throw new Error('Error fetching booking: ' + error.message);
  }
};

// Update a booking by ID
const updateBookingById = async (id, data) => {
  try {
    const booking = await Booking.findByIdAndUpdate(id, data, { new: true });
    if (!booking) {
      throw new Error('Booking not found');
    }
    return booking;
  } catch (error) {
    throw new Error('Error updating booking: ' + error.message);
  }
};

// Delete a booking by ID
const deleteBookingById = async (id) => {
  try {
    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) {
      throw new Error('Booking not found');
    }
    return booking;
  } catch (error) {
    throw new Error('Error deleting booking: ' + error.message);
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById
};