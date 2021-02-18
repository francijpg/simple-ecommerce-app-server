const payments = ({ stripe }: any, CLIENT_DOMAIN: string) => ({

  createPayment: async (req: any, res: any) => {
    const dataToPay = req.body;
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: dataToPay,
        mode: "payment",
        success_url: `${CLIENT_DOMAIN}?success=true`,
        cancel_url: `${CLIENT_DOMAIN}?canceled=true`,
      });
      res.status(200).json({ id: session.id });
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  }

})

export default payments