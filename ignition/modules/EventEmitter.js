const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('EventEmitterModule', m => {
    const EventEmitterModule = m.contract('EventEmitter');

    return { EventEmitterModule };
});