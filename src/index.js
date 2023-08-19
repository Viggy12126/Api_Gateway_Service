const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const rateLimit = require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000,
    max:4
	
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(limiter);

app.use('/api', apiRoutes);
app.use('/flightsService',createProxyMiddleware({target:ServerConfig.FLIGHT_SERVICE,changeOrigin: true }))
app.use('/bookingService',createProxyMiddleware({target:ServerConfig.BOOKING_SERVICE,changeOrigin: true }))

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
