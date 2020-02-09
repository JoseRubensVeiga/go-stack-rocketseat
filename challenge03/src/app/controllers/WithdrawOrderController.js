import * as Yup from 'yup';

import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';

const deliverymanCanDeliver = async (id) => {
  const deliveryman = await Deliveryman.findByPk(id, {
    include: [Order],
  });

  return deliveryman.Orders.length < 5;
};

class DeliveryOrderController {
  async update(req, res) {
    const { id } = req.params;
    const { start_date } = req.body;

    const schema = Yup.object().shape({
      start_date: Yup.date().required(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Error. Invalid date format.' });
    }

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(400).json({ error: 'There is no order with this id.' });
    }

    if (!deliverymanCanDeliver(order.deliveryman_id)) {
      return res.status(401).json({ error: 'This deliveryman has already withdrawn five orders.' });
    }

    if (order.start_date) {
      return res.status(401).json({ error: 'Order already is already withdrawn.'});
    }

    order.start_date = start_date;
    await order.save();

    return res.json({ message: 'Order has been withdrawn.' });
  }
}

export default new DeliveryOrderController();
