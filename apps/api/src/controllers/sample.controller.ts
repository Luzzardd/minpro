import { Request, Response } from 'express';
import prisma from '../prisma'; // Corrected import

export class SampleController {
  async getSampleData(req: Request, res: Response) {
    try {
      const sampleData = await prisma.sample.findMany();
      return res.status(200).send(sampleData);
    } catch (error) {
      return res.status(500).send({ message: 'Error fetching sample data', error });
    }
  }

  async getSampleDataById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const sample = await prisma.sample.findUnique({
        where: { id: Number(id) },
      });

      if (!sample) {
        return res.status(404).send({ message: 'Sample not found' });
      }

      return res.status(200).send(sample);
    } catch (error) {
      return res.status(500).send({ message: 'Error fetching sample data by ID', error });
    }
  }

  async createSampleData(req: Request, res: Response) {
    const { name, code } = req.body;

    // Validation
    if (!name || !code) {
      return res.status(400).send({ message: 'Name and code are required' });
    }

    try {
      const newSampleData = await prisma.sample.create({
        data: { name, code },
      });

      return res.status(201).send(newSampleData);
    } catch (error) {
      return res.status(500).send({ message: 'Error creating sample data', error });
    }
  }
}
