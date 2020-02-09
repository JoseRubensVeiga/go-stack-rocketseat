import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';

import Mail from '../../lib/Mail';

class OrderController {
  async index(req, res) {
    return res.json(await Order.findAll());
  }

  async show(req, res) {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(400).json({
        error: 'There is no order with this id',
      });
    }

    return res.json(order);
  }

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

  async update(req, res) {
    const { id } = req.params;

    const { start_date } = req.body;

    if (start_date) {
      const data = new Date(start_date);
      const hour = data.getHours();

      if (!(hour >= 8 && hour <= 18)) {
        res.status(400).json({
          error: 'Invald start date.',
        });
      }
    }

    const order = await Order.findByPk(id);

    order.update(req.body);
    await order.save();

    return res.json(order);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const order = await Order.findByPk(id, {
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
        },
      ],
    });

    if (!order) {
      return res.status(400).json({
        error: 'There is no order with this id',
      });
    }

    await order.destroy();

    await Mail.sendMail({
      to: `${order.deliveryman.name} <${order.deliveryman.email}>`,
      subject: 'Um pedido foi cancelado',
      template: 'cancellation',
      context: {
        deliverymanName: order.deliveryman.name,
        productName: order.product,
        canceledAt: format(order.canceled_at, "'dia' dd 'de' MMMM', às' H:mm'h'", {locale: pt}),
      },
    });

    return res.json({
      message: 'success',
    });
  }
}

export default new OrderController();
