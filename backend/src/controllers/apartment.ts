import { Request, Response } from 'express';
import Apartment from '../models/apartment';

const getApartments = async (req: Request, res: Response): Promise<void> => {
  try {
    const apartments = await Apartment.find({})
      .select({ address: 1, location: 1, city: 1, price: 1, _id: 1 })
      .exec();
    const total = await Apartment.countDocuments({}).exec();
    res.status(200).json({
      apartments,
      total,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const createApartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const apartment = new Apartment(req.body);
    await apartment.save();
    res.status(200).json(apartment);
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ errors: error.errors });
      return;
    }
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getApartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    // TODO: validate ObjectId
    const apartment = await Apartment.findById(id).exec();
    if (!!apartment) {
      res.status(200).json({
        apartment,
      });
    } else {
      res.status(404).json({
        message: 'Apartment not found',
      });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export default {
  getApartment,
  getApartments,
  createApartment,
};
