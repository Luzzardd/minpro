import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { validationResult } from 'express-validator';

const prisma = new PrismaClient();

const createEvent = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, price, date, location, description, image } = req.body;

  try {
    const event = await prisma.event.create({
      data: {
        name,
        price,
        date: new Date(date),
        location,
        description,
        image,
      },
    });
    return res.status(201).json(event);
  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: 'Failed to create event' });
  }
};

export default createEvent;
