const amqp = require("amqplib/callback_api");

const CONN_URL =
  "amqps://pjdvhkxo:Vy1_tO16z0gN_HxtvMQCSU-tQiYjLLz9@puffin.rmq2.cloudamqp.com/pjdvhkxo";

let ch = null;

amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, channel) {
    ch = channel;
    const publishToQueue = () => {
      channel.sendToQueue("analytics", Buffer.from("sanket"));
    };
    publishToQueue();
  });
});

process.on("exit", (code) => {
  ch.close();
  console.log(`Closing rabbitmq channel`);
});
