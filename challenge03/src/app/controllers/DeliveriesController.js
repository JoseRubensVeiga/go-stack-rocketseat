import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';
import Order from '../models/Order';

class DeliveriesController {
  async index(req, res) {
    const { id } = req.params;

    const { delivered } = req.query;

    let end_date = null;

    if (delivered) {
      end_date = {
        [Op.not]: null,
      };
    }

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({
        error: 'There is no deliveryman with this id',
      });
    }

    const orders = await Order.findAll({
      where: {
        canceled_at: null,
        deliveryman_id: id,
        end_date,
      },
    });

    return res.json(orders);
  }
}

export default new DeliveriesController();
