// import Hotel from "../models/Hotel.js";

// export const createHotel = async (req, res, next)=>{
//     const newHotel = new Hotel(req.body)

//     try{
//         const savedHotel = await newHotel.save()
//         res.status(200).json(savedHotel)

//     }catch(err){
//         next(err);
//     }
// }

// export const updateHotel = async (req, res, next)=>{
//     try{
//         const updatedHotel = await Hotel.findByIdAndUpdate(
//             req.params.id,
//             { $set: req.body}, 
//             {new:true})
//         res.status(200).json(updatedHotel)

//     }catch(err){
//         next(err);
//     }
// }

// export const deleteHotel = async (req, res, next)=>{
//     try{
//         await Hotel.findByIdAndDelete(
//             req.params.id
//         );
//         res.status(200).json("Hotel Deleted")

//     }catch(err){
//         next(err);
//     }
// }

// export const getHotel = async (req, res, next)=>{
//     try{
//         const hotel = await Hotel.findById(
//             req.params.id
//         );
//         res.status(200).json(hotel)

//     }catch(err){
//         next(err);
//     }
// }

// export const getHotels = async (req, res, next)=>{
//     try{
//         const hotels = await Hotel.find();
//         res.status(200).json(hotels)

//     }catch(err){
//         next(err);
//     }
// }

// export const countByCity = async (req, res, next)=>{
//     const cities = req.query.cities.split(",")
//     try{
//         const list = await Promise.all(cities.map(city=>{
//             return Hotel.countDocuments({city:city})
//         }))
//         res.status(200).json(list)

//     }catch(err){
//         next(err);
//     }
// }

// export const countByType = async (req, res, next)=>{
    
//     try{
//         const hotelCount = await Hotel.countDocuments({type:"hotel"});
//         const apartmentCount = Hotel.countDocuments({type:"apartment"});
//         const resortCount = Hotel.countDocuments({type:"resort"});
//         const villaCount = Hotel.countDocuments({type:"villa"});
//         const beachCount = Hotel.countDocuments({type:"beach"});

//         res.status(200).json([
//             {type:"hotel", count:hotelCount},
//             {type:"apartments", count:apartmentCount},
//             {type:"resorts", count:resortCount},
//             {type:"villas", count:villaCount},
//             {type:"beach", count:beachCount},
//         ]);

//     }catch(err){
//         next(err);
//     }
// }

import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};
export const getHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "campGround" });
    const resortCount = await Hotel.countDocuments({ type: "ecoLodge" });
    const villaCount = await Hotel.countDocuments({ type: "restaurant" });
    const cabinCount = await Hotel.countDocuments({ type: "guest house" });
    const bedrestaurantCount = await Hotel.countDocuments({ type: "bed & restaurant" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "campground", count: apartmentCount },
      { type: "ecoLodge", count: resortCount },
      { type: "restaurant", count: villaCount },
      { type: "guest house", count: cabinCount },
      { type: "bed & restaurant", count: bedrestaurantCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};