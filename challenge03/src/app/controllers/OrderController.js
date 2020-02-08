import Order from '../models/Order';

class OrderController {
  async store(req, res) {
    const {
      recipient_id, deliveryman_id, signature_id, product,
    } = req.body;

    const order = await Order.create({
      product,
      recipient_id,
      deliveryman_id,
      signature_id,
    });


    return res.json({
      order,
    });
  }
}

export default new OrderController();
