const redis = require('redis');

(async () => {
    try {
        const client = redis.createClient();
        const subscriber = client.duplicate();
        await subscriber.connect();
        await subscriber.subscribe('article', (message) => {
            console.log(message); // 'message'
        });
    } catch (error) {
        console.error(error)
    }
})();