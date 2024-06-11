import { ErrorRequestHandler, RequestHandler } from 'express';
import { EModel } from './E.model';

export const noRouteHandler: RequestHandler = (req, res, next) => {
  next(new Error(`no route found`));
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    res.status(500).json({ success: false, error: err.message });
  } else {
    res.status(500).json({ success: false, error: err });
  }
};

export const CreateEmail: RequestHandler<
  unknown,
  { success: boolean; data: string },
  { email: string },
  unknown
> = async (req, res, next) => {
  try {
    const { email } = req.body;
    const output = await EModel.create({ Email: email });

    res.status(201).json({ success: true, data: output._id.toString() });
  } catch (error) {
    next(error);
  }
};

export const CheckEmail: RequestHandler<
  unknown,
  null | Record<string, boolean>,
  { email: string },
  unknown
> = async (req, res, next) => {
  try {
    const { email } = req.body; // Email from query params
    const existingEmail = await EModel.findOne({ Email: email });
    if (!existingEmail) {
      res.status(200).send(null).end();
    } else {
      res.status(200).json({ exist: true });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
