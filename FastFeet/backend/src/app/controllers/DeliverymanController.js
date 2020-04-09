import { iLike } from 'sequelize/lib/operators';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const { q } = req.query;
    let where = null;

    if (q) {
      where = {
        name: {
          [iLike]: `%${q}%`,
        },
      };
    }

    const deliverymans = await Deliveryman.findAll({
      include: [
        {
          model: File,
          as: 'avatar',
        },
      ],
      where,
    });

    return res.json(deliverymans);
  }

  async show(req, res) {
    const deliveryman = await Deliveryman.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!deliveryman) {
      return res.status(401).json({
        error: 'There is no deliveryman with this id.',
      });
    }

    return res.json(deliveryman);
  }

  async store(req, res) {
    const { name, avatar_id, email } = req.body;

    const deliveryman = await Deliveryman.create({
      name,
      avatar_id,
      email,
    });

    return res.json(deliveryman);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, avatar_id } = req.body;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({
        error: 'There is no deliveryman with this id',
      });
    }

    if (name) {
      deliveryman.name = name;
    }

    if (email) {
      deliveryman.email = email;
    }

    if (avatar_id) {
      deliveryman.avatar_id = avatar_id;
    }

    deliveryman.save();

    return res.json(deliveryman);
  }
}

export default new DeliverymanController();
