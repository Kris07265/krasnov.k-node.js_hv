const os = require('os');

const systemInfoLog = () => {
    console.log('OS Platform: ', os.platform());
    console.log('Free Memory: ', os.freemem());
    console.log('System Uptime: ', os.uptime());
    console.log('CPU Cores: ', os.cpus());
};

module.exports = {
    systemInfoLog
};