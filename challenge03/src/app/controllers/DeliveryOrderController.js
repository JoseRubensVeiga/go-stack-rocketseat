import * as Yup from 'yup';

import Order from '../models/Order';

class WithdrawOrderController {
  async update(req, res) {
    const schema = Yup.object().shape({
      end_date: Yup.date().required(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Error. Invalid date format.' });
    }

    const { id } = req.params;
    const { end_date } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(400).json({ error: 'There is no order with this id.' });
    }

    if (order.end_date) {
      return res.status(401).json({ error: 'Order already is already delivered.'});
    }

    order.end_date = end_date;
    await order.save();

    return res.json({ message: 'Order has been delivered.' });
  }
}

export default new WithdrawOrderController();
