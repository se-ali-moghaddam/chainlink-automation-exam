const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('TimeBasedTriggerModule', m => {
    const TimeBasedTriggerModule = m.contract('TimeBasedTrigger');

    return {
        TimeBasedTriggerModule
    };
});