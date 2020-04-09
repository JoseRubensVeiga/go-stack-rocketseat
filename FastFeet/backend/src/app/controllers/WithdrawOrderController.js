import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';

import Order from '../models/Order';

class DeliveryOrderController {
  async update(req, res) {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(400).json({ error: 'There is no order with this id.' });
    }

    const ordersAmount = await Order.count({
      where: {
        deliveryman_id: order.deliveryman_id,
        start_date: {
          [Op.between]: [startOfDay(new Date()), endOfDay(new Date())],
        },
        canceled_at: null,
      },
    });

    if (ordersAmount >= 5) {
      return res
        .status(401)
        .json({ error: 'This deliveryman has already withdrawn five orders.' });
    }

    if (order.start_date) {
      return res.status(401).json({ error: 'Order already is withdrawn.' });
    }

    order.start_date = new Date();
    await order.save();

    return res.json({ message: 'Order has been withdrawned.' });
  }
}

export default new DeliveryOrderController();
