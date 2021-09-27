const amqp = require("amqplib/callback_api");

const CONN_URL =
  "amqps://pjdvhkxo:Vy1_tO16z0gN_HxtvMQCSU-tQiYjLLz9@puffin.rmq2.cloudamqp.com/pjdvhkxo";

amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume(
      "analytics",
      function (msg) {
        console.log(JSON.parse(msg.content.toString()));
      },
      { noAck: false }
    );
  });
});
