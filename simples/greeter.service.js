const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({ transporter: "nats://localhost:4222"});

broker.createService({
    name: "greeter",
    actions: {
		hello: {
			handler(ctx) {
				const payload = `hello from greeter@${this.broker.nodeID}`
				return {payload};
			}	
		},
    }
});

broker.start()