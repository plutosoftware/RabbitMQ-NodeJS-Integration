# RabbitMQ - NodeJS Tutorial :

It is used in Message Based Systems as Message Broker. Unlike traditional Synchronous Communication between two components, In RabbitMQ we follow Asynchronous Communication with the help of Messaging Queues. Messaging based systems has number of advantages over RPC (Remote procedure calls) based systems. We have the functionality of queueing the incoming requests incase a request is taking longer to run. Here, we also don't loose the data if the service is down, because the event will stay in queue and wait for the service to come up again. This architecture facilitates decoupling of different system components.

However, there are also downsides of this approach. Our application had introduced an single point of failure. If our messaging queue goes down, logically our whole application is going to be down. But, we can take care of that by clustering our message broker service and making the application fault tolerent. Also, our communication is Asynchronous so there will be always some delay as compared to Synchronous Communication. It also increases network traffic.

## Protocols Supported by RabbitMQ :

1. AMQP (Advanced Message Queue Protocol) v0.9.1
2. STOMP (Simple Text Oriented Message Protocol)
3. MQTT (Messsage Queue Telemetry Transport)
4. AMQP v1.0

## AMQP :

It stands for Advanced Message Queue Protocol. +It's a binary Protocol i.e messages are sent in binary data. When we use AMQP protocol, basically we are sending frames of data over network. A Sample AMQP frame has structure as follows :

`TYPE` - `CHANNEL` - `SIZE` - `PAYLOAD` - `FRAME-END`

This protocol is based on AMQ model, which consists of `Publisher` who published the message to `Exchange` which then binds the data to `Queue` which then forwards the message to `Consumer`. Multiple Consumer can `Subscribe` to the Queue, but only single Consumer can get the message.  The Consumer then sends the `Acknowledgement` back to the queue which tells the Queue to delete the message from the Queue.

The Queue or the Exchange can be configured as `Durable` or `Transient`. The Durable Queue means it will survive RabbitMQ restart and we dont have to recreate the queue, whereas Transient will not. Durable doesn't mean persistance. This messages are kept into memory. We can also configure a queue to auto-delete itself if no consumer is connected to it. 

## Advantages of RabbitMQ :

1. RabbitMQ can be used with clustering to make system highly available and fault tolerent. 
2. Highly Available Queues can also be used to make system more fault tolerent. 
3. It includes Management UI which makes managing multiple channels and queues easier with the help of GUI Dashboard.
4. It is free and open-source. 